<template>
    <!-- Comment -->
    <v-container fill-height
                 fill-width
                 fluid
                 style="flex-wrap: wrap;">
        <v-layout justify-center
                  wrap
                  fill-width>
            <v-stepper v-model="e6"
                       vertical
                       fill-width>
                <v-stepper-step :complete="e6 > 1"
                                step="1">
                    Parent Registration
                    <small>If you already have a parent account, please log in and register in the parent portal</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                    <validation-observer ref="observer"
                                         v-slot="{ invalid }">
                        <form @submit.prevent="submit">
                            <validation-provider v-slot="{ errors }"
                                                 name="First Name"
                                                 rules="required">
                                <v-text-field v-model="parentFname"
                                              :error-messages="errors"
                                              label="First Name"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Last Name"
                                                 rules="required">
                                <v-text-field v-model="parentLname"
                                              :error-messages="errors"
                                              label="Last Name"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Phone Number"
                                                 :rules="{
                                                          required: true,
                                                          digits: 10,
                                                        }">
                                <v-text-field v-model="phoneNumber"
                                              :counter="10"
                                              :error-messages="errors"
                                              label="Phone Number"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Email"
                                                 rules="required|email">
                                <v-text-field v-model="email"
                                              :error-messages="errors"
                                              label="E-mail"
                                              required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }"
                                                 name="Password"
                                                 rules="required|min:8">
                                <v-text-field v-model="pw"
                                              :error-messages="errors"
                                              label="Password"
                                              required></v-text-field>
                            </validation-provider>
                            <v-btn class="mr-4"
                                   type="submit"
                                   :disabled="invalid"
                                   color="secondary"
                                   @click="createParent();">
                                submit
                            </v-btn>
                            <v-btn outlined
                                   @click="e6 = 2"
                                   color="accent">
                                clear
                            </v-btn>
                        </form>
                    </validation-observer>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2"
                                step="2">
                    Child Registration
                    <small>If you are registering a returning camper, please log in to the parent portal and register the returning camper there</small>
                </v-stepper-step>

                <v-stepper-content step="2">
                    <v-card class="mb-12">
                        <validation-observer ref="observer2"
                                             v-slot="{ invalid }">
                            <form @submit.prevent="submit">
                                <validation-provider v-slot="{ errors }"
                                                     name="parentID"
                                                     rules="required">
                                    <v-text-field v-model="childFname"
                                                  :error-messages="errors"
                                                  label="First Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Last Name"
                                                     rules="required">
                                    <v-text-field v-model="childLname"
                                                  :error-messages="errors"
                                                  label="Last Name"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Gender"
                                                     rules="required">
                                    <v-select v-model="childGender"
                                              :items="genders"
                                              :error-messages="errors"
                                              label="Select Child's Gender"
                                              data-vv-name="genders"
                                              required></v-select>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Date of Birth (MM/DD/YYYY)"
                                                     :rules="{
                                                              required: true,
                                                              length: 10
                                                            }">
                                    <v-text-field v-model="childDOB"
                                                  :error-messages="errors"
                                                  label="Date of Birth"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="School Attended (2020-2021)"
                                                     rules="required">
                                    <v-text-field v-model="childAttended"
                                                  :error-messages="errors"
                                                  label="School Attended (2020-2021)"
                                                  required></v-text-field>
                                </validation-provider>
                                <validation-provider v-slot="{ errors }"
                                                     name="Child's Grade (2020-2021)"
                                                     rules="required">
                                    <v-select v-model="childGrade"
                                              :items="grades"
                                              :error-messages="errors"
                                              label="Select Child's Grade"
                                              data-vv-name="grades"
                                              required></v-select>
                                </validation-provider>
                                <v-btn class="mr-4"
                                       type="submit"
                                       :disabled="invalid"
                                       color="secondary"
                                       @click="createChild(); e6 = 3">
                                    submit
                                </v-btn>
                                <v-btn outlined
                                       @click="clear"
                                       color="accent">
                                    clear
                                </v-btn>
                            </form>
                        </validation-observer>
                    </v-card>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3"
                                step="3">
                    Camp Registration
                </v-stepper-step>

                <v-stepper-content step="3">
                    <v-card color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                            width="2000px"></v-card>
                    <v-btn color="primary"
                           @click="e6 = 4">
                        Continue
                    </v-btn>
                    <v-btn text>
                        Cancel
                    </v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">
                    Payment and Waivers
                </v-stepper-step>
                <v-stepper-content step="4">
                    <v-card color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                            width="2000px"></v-card>
                    <v-btn color="primary"
                           @click="e6 = 1">
                        Continue
                    </v-btn>
                    <v-btn text>
                        Cancel
                    </v-btn>
                </v-stepper-content>
            </v-stepper>
        </v-layout>
    </v-container>
</template>

<script>
    const CREATE_PARENT = `
        mutation createParent($firstname: String, $lastname: String, $myemail: String, $mypassword: String, $myphone: String) {
            createParent(data: {first_name: $firstname, last_name: $lastname, email: $myemail, password: $mypassword, mobile_phone: $myphone}) {
              id
            }
          }
    `;

    const CREATE_CHILD = `
        mutation createChild($firstname: String, $lastname: String, $myGender: ChildGenderType, $myGrade: ChildSchoolGradeType, $myAttended: String, $myParent: ParentRelateToManyInput) {
            createChild(data: {first_name: $firstname, last_name: $lastname, gender: $myGender, school_grade: $myGrade, school_attended: $myAttended, parent: $myParent}) {
              id
            }
          }
    `;

    function graphql(query, variables = {}) {
        return fetch("http://localhost:3000/admin/api", {
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

    import { mapGetters } from "vuex";
    import materialCard from "~/components/material/AppCard";
    import { required, digits, email, max, regex, min, length } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')
    extend('digits', {
        ...digits,
        message: '{_field_} needs to be {length} digits. ({_value_})',
    })
    extend('length', {
        ...length,
        message: '{_field_} needs to be in MM/DD/YYY Format. ({_value_})',
    })
    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })
    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })
    extend('regex', {
        ...regex,
        message: '{_field_} {_value_} does not match {regex}',
    })
    extend('email', {
        ...email,
        message: 'Email must be valid',
    })
    extend('min', {
        ...min,
        message: '{_field_} must be at least {length} characters',
    })


    export default {
        layout: "logindashboard",
        data() {
            return {
                parentid: '',
                parentFname: '',
                parentLname: '',
                phoneNumber: '',
                email: '',
                pw: '',
                childFname: '',
                childLname: '',
                childGender: '',
                genders: [
                    'Male',
                    'Female',
                    
                ],
                childGrade: '',
                grades: [
                    'Kindergarden',
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
                childAttended: '',
                childDOB: '',
                e6: 1,
            };
        },
        components: {
            materialCard,
            ValidationProvider,
            ValidationObserver,
        },

        methods: {
            async createParent() {
                const { data } = await graphql(CREATE_PARENT, {
                    firstname: this.parentFname, lastname: this.parentLname,
                    myemail: this.email, myphone: this.phoneNumber, mypassword: this.pw
                });
                this.parentid = data;
                try {
                    if (this.parentid.createParent.id !== null) {
                        this.e6 = 2;
                    };
                }
                catch (err) {
                    this.email = this.email.concat(" this email is already in the database please use another");
                }

            },
            async createChild() {
                await graphql(CREATE_CHILD, {
                    firstname: this.childFname, lastname: this.childLname, myGender: this.childGender,
                    myGrade: this.childGrade, myAttended: this.childAttended, myParent: this.parentID
                })
            },
            submit() {
                this.$refs.observer.validate()
            },
            clear() {
                this.name = ''
                this.phoneNumber = ''
                this.email = ''
                this.select = null
                this.checkbox = null
                this.$refs.observer.reset()
            },

        },
        computed: {
            ...mapGetters({
                user: "user/getUser",
                fullname: "user/getFullname",
            }),
        },

    };
</script>