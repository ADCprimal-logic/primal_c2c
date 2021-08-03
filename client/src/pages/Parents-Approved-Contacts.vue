<template>
    <!-- Comment -->
    <v-container fill-height fill-width fluid style="flex-wrap: wrap">
        <v-layout justify-center wrap fill-width>
            <v-stepper v-model="e6" vertical fill-width>
                <v-stepper-step :complete="e6 > 1" step="1">
                    Select a Child to Add an Approved Contact for:
                    <small>
                        If you already have a parent account, please log in and register in
                        the parent portal
                    </small>
                </v-stepper-step>

                <v-stepper-content step="1">
                    <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="submit">
                            <v-radio-group v-model="radioGroup">
                                <v-radio v-for="value in myChildData"
                                         :key="value.id"
                                         :label="`${value.first_name} ${value.last_name}`"
                                         :value="value.id"></v-radio>
                            </v-radio-group>
                            <v-btn class="mr-4"
                                   type="submit"
                                   :disabled="radioGroup == ''"
                                   color="secondary"
                                   @click="e6 = 2; printMe()">
                                submit
                            </v-btn>
                        </form>
                    </validation-observer>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2">
                    Approved Contact Registration
                    <small>
                        If you are registering a returning camper, please log in to the
                        parent portal and register the returning camper there
                    </small>
                </v-stepper-step>

                <v-stepper-content step="2">
                    <v-card class="mb-12">
                        <validation-observer ref="observer2" v-slot="{ invalid }">
                            <form @submit.prevent="submit">
                                <validation-provider v-slot="{ errors }"
                                                     name="First Name"
                                                     rules="required">
                                    <v-text-field v-model="fname"
                                                  :error-messages="errors"
                                                  label="First Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Last Name"
                                                     rules="required">
                                    <v-text-field v-model="lname"
                                                  :error-messages="errors"
                                                  label="Last Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Relation to Child"
                                                     rules="required">
                                    <v-text-field v-model="myrelation"
                                                  :error-messages="errors"
                                                  label="Relation to Child"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Approved Contact's Phone Number"
                                                     :rules="{
                                                            required: true,
                                                            digits: 10,
                                                          }">
                                    <v-text-field v-model="myphone"
                                                  :counter="10"
                                                  :error-messages="errors"
                                                  label="Approved Contact's Phone Number"
                                                  required></v-text-field>
                                </validation-provider>
                                <v-btn class="mr-4"
                                       type="submit"
                                       :disabled="invalid"
                                       color="secondary"
                                       @click="
                                            addApprovedContact();
                                            e6 = 3;
                                            ">
                                    submit
                                </v-btn>
                                <v-btn outlined @click="e6 = 3" color="accent"> clear </v-btn>
                            </form>
                        </validation-observer>
                    </v-card>
                </v-stepper-content>
                <v-stepper-step :complete="e6 >= 3" step="3">
                    Approved Contact Registration Complete!
                </v-stepper-step>



            </v-stepper>
            
            <v-flex xs12 md8>
                <material-card color="mint"
                               title="Children(s) Approved Contacts:"
                               text="Use this page to update your contact, personal information and system avatar.">
                    <v-form>
                        <v-container py-0>
                            <v-layout wrap>
                                <v-flex xs12 md12>

                                        <v-card-text>
                                            
                                            <ul>
                                                <li v-for="value in myChildData">
                                                    {{value.first_name}} {{value.last_name}}'s Approved Contacts:
                                                    <ul>
                                                        <li v-for="value2 in value.approved_contact">{{value2.first_name}} {{value2.last_name}}: 
                                                            <ul>
                                                                <li>Relation: {{value2.relation}}</li>
                                                                <li>Phone:    {{value2.phone}}</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </v-card-text>
                                </v-flex>

                                
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    const UPDATE_CHILD = `
        mutation updateChild($myChild: ID!, $myApproved: ApprovedContactRelateToManyInput) {
            updateChild(id: $myChild, data: {approved_contact: $myApproved}) {
              id
            }
          }
    `;

    const UPDATE_PARENT = `
        mutation updateParent($myParent: ID!, $myApproved: ApprovedContactRelateToManyInput) {
            updateParent(id: $myParent, data: {approved_contact: $myApproved}) {
              id
            }
          }
    `;

    const GET_CHILDREN = `
        query Parent($myParent: ID!) {
            Parent(where: {id: $myParent}){
              child {
                id
                first_name
                last_name
                approved_contact {
                  first_name
                  last_name
                  relation
                  phone
                }
              }
            }
          }
    `;

    const CREATE_APPROVED = `
        mutation addapprovedcontact($myfname: String, $mylname: String, $myphone: String, $myrelation: String, 
                                    $mychild: ChildRelateToManyInput, $myparent: ParentRelateToManyInput) {
            createApprovedContact(data: {first_name: $myfname, last_name: $mylname, phone: $myphone,
                                         relation: $myrelation, child: $mychild, parent: $myparent}) {
              id
            }
          }
    `;

    function graphql(query, variables = {}) {
        return fetch(process.env.baseUrl + "/admin/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                variables,
                query,
            }),
        }).then(function (result) {
            return result.json();
        });
    }

    function getUser(data) {
        return fetch(process.env.baseUrl + "/api/auth/user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data,
            }),
        }).then(function (result) {
            //console.log(result);
            return result.json();
        });
    }

    import { mapGetters } from "vuex";
    import materialCard from "~/components/material/AppCard";
    import {
        required,
        digits,
        email,
        max,
        regex,
        min,
        length,
    } from "vee-validate/dist/rules";
    import {
        extend,
        ValidationObserver,
        ValidationProvider,
        setInteractionMode,
    } from "vee-validate";
    import { StripeCheckout } from '@vue-stripe/vue-stripe';

    setInteractionMode("eager");
    extend("digits", {
        ...digits,
        message: "{_field_} needs to be {length} digits. ({_value_})",
    });
    extend("length", {
        ...length,
        message: "{_field_} needs to be in MM/DD/YYY Format. ({_value_})",
    });
    extend("required", {
        ...required,
        message: "{_field_} can not be empty",
    });
    extend("max", {
        ...max,
        message: "{_field_} may not be greater than {length} characters",
    });
    extend("regex", {
        ...regex,
        message: "{_field_} {_value_} does not match {regex}",
    });
    extend("email", {
        ...email,
        message: "Email must be valid",
    });
    extend("min", {
        ...min,
        message: "{_field_} must be at least {length} characters",
    });

    export default {
        layout: "parentsdashboard",
        data() {
            return {
                parentid: "",
                selectedChildID: "",
                childid: "",
                radioGroup: "",
                myphone: "",
                myemail: "",
                fname: "",
                lname: "",
                myrelation: '',
                approvedID: '',
                e6: 1,
            };
        },
        components: {
            materialCard,
            ValidationProvider,
            ValidationObserver,
            StripeCheckout,
        },

        methods: {
            async addApprovedContact() {
                const { data } = await graphql(CREATE_APPROVED, {
                    myfname: this.fname, mylname: this.lname, myrelation: this.myrelation, myphone: this.myphone,
                    mychild: { connect: { id: this.radioGroup } }, myparent: { connect: { id: this.myParentID } },
                });
                this.approvedID = data.createApprovedContact.id;
                console.log("Approved ID: " + this.approvedID +
                    " Child ID: " + this.radioGroup +
                    " Parent ID: " + this.myParentID);

                this.connectChild2Approved();
                
            },
            async connectChild2Approved() {
                await graphql(UPDATE_CHILD, {
                    myChild: this.radioGroup,
                    myApproved: { connect: { id: this.approvedID } },
                });

                this.connectParent2Approved();
            },
            async connectParent2Approved() {
                await graphql(UPDATE_PARENT, {
                    myParent: this.myParentID,
                    myApproved: { connect: { id: this.approvedID } },
                });
            },
            submit() {
                this.$refs.observer.validate();
            },
            printMe() {
                console.log(this.selectedChildID + " radioGroup= " + this.radioGroup);
            },
            
            clear() {
                this.name = "";
                this.phoneNumber = "";
                this.email = "";
                this.select = null;
                this.checkbox = null;
                this.$refs.observer.reset();
            },
        },
        computed: {
            ...mapGetters({
                user: "user/getUser",
                fullname: "user/getFullname",
            }),
        },
        async asyncData() {
            try {
                var token = await localStorage.getItem("auth_token");
                var responseUser = await getUser(token);
                var childrenData = await graphql(GET_CHILDREN, {
                    myParent: responseUser.decoded.id,
                });
                console.log(responseUser.decoded.id);
                return {
                    myParentID: responseUser.decoded.id,
                    myChildData: childrenData.data.Parent.child,
     
                };
            } catch (err) {
                console.log(err);
            }
        },
    };
</script>
