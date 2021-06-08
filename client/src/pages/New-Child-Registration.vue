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
                                   @click="createParent(); e6 = 2">
                                submit
                            </v-btn>
                            <v-btn outlined 
                                   @click="clear"
                                   color="accent">
                                clear
                            </v-btn>
                        </form>
                    </validation-observer>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2"
                                step="2">
                    Child Registration
                </v-stepper-step>

                <v-stepper-content step="2">
                    <v-card color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                            width="2000px"></v-card>
                    <v-btn color="primary"
                           @click="e6 = 3">
                        Continue
                    </v-btn>
                    <v-btn text
                           @click="e6 = 1">
                        Cancel
                    </v-btn>
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
    import { required, digits, email, max, regex, min } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
   
    setInteractionMode('eager')
    extend('digits', {
        ...digits,
        message: '{_field_} needs to be {length} digits. ({_value_})',
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
        layout: "dashboard",
        data() {
            return {
                fname: '',
                lname: '',
                phoneNumber: '',
                email: '',
                pw: '',
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
                await graphql(CREATE_PARENT, { firstname: this.fname, lastname: this.lname, myemail: this.email, myphone: this.phoneNumber, mypassword: this.pw });
                console.log("Parent created: " + this.fname + " " + this.lname);
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