<template>
    <!-- Once tony creates the balance variable for the child object i will change this table just to show the child's name, pin, and balance -->
    <!-- when you click on the child you will have multiple buttons that will deduct money from the child's balance-->
    <!-- button for one day's lunch, buttons for different snack prices or drinks or something-->
    <v-container fill-height
                 fluid
                 grid-list-xl>
        <v-layout justify-center
                  wrap>
            <v-flex md12>
                <v-text-field v-model="search"
                              append-icon="search"
                              label="Search for a student by any associated data."
                              single-line
                              hide-details></v-text-field>
                <material-card color="C2Cblue"
                               title="Find Student and Charge them for Lunch/Snack"
                               text="Expands to show detailed data on the child.">
                    <v-data-table :headers="headers"
                                  :items="children"
                                  :expand="expand"
                                  item-key="full_name"
                                  loading="true"
                                  :search="search"
                                  dark
                                  class>
                        <template slot="headerCell"
                                  slot-scope="{ header }">
                            <span class="subheading font-weight-light text-success text--darken-3"
                                  v-text="header.text" />
                        </template>
                        <template v-slot:items="props">
                            <tr @click="props.expanded = !props.expanded">
                                <td>{{ props.item.full_name }}</td>
                                <td class="text-xs-left" v-if="props.item.pin_number">{{ props.item.pin_number }}</td>
                                <td class="text-xs-left" v-else>n/a</td>
                                <td class="text-xs-left" v-if="props.item.balence">{{ props.item.balence }}</td>
                                <td class="text-xs-left" v-else>n/a</td>

                            </tr>
                        </template>
                        <template v-slot:no-results>
                            <v-alert :value="true" color="error" icon="warning">
                                Your search for "{{ search }}" found no results.
                            </v-alert>
                        </template>
                        <template v-slot:expand="props">
                            <v-responsive :aspect-ratio="16/9">
                                <v-card-text>
                                    <v-layout row wrap align-right>
                                        <v-flex xs12 sm6 offset-sm3>
                                            <v-card color='C2Cblue'>
                                                <v-layout column fill-height>
                                                    <!-- Name over Image -->
                                                    <v-card-title class="justify-center align-center white--text text-center pl-26 pt-26">
                                                        {{props.item.first_name}}'s data is printed below.
                                                    </v-card-title>
                                                </v-layout>
                                                <!-- Defines the two lines in each data field -->
                                                <v-list two-line>
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action><v-icon color="C2Corange">mdi-account</v-icon></v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>{{props.item.full_name}}</v-list-tile-title>
                                                            <v-list-tile-sub-title>Child's Full Name</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>

                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action><v-icon color="C2Corange">mdi-account-search</v-icon></v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.pin_number">{{props.item.pin_number}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            <v-list-tile-sub-title>Child's PIN Number</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>

                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action><v-icon color="C2Corange">mdi-account-cash</v-icon></v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.balence">{{props.item.balence}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            <v-list-tile-sub-title>Child's Lunch/Snack Balance</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>

                                                    <!-- Field Divider -->

                                                    <v-divider inset></v-divider>
                                                    <v-list-tile @click="selectedID = props.item.id; getBalance()">
                                                        <v-list-tile-action><v-icon color="C2Corange">mdi-arrange-send-backward</v-icon></v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Charge Child - <u>One Lunch</u> - $5</v-list-tile-title>


                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>
                                                    <v-list-tile @click="selectedID = props.item.id; getBalanceSnack()">
                                                        <v-list-tile-action><v-icon color="C2Corange">mdi-arrange-send-backward</v-icon></v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Charge Child - <u>One Snack</u> - $2</v-list-tile-title>


                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <!-- End of Fields -->
                                                </v-list>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-responsive>
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
            <v-snackbar :color="color1" :top="true" v-model="snackbar1">
                <v-icon color="white" class="mr-3"> mdi-alert-circle </v-icon>
                <div>Successfully Charged!</div>
                <v-icon size="16" @click="snackbar3 = false"> mdi-close-circle </v-icon>
            </v-snackbar>
        </v-layout>
    </v-container>
</template>
<script>
    const ALL_CHILD = `
        query{
          allChildren{
            full_name
            first_name
            gender
            parent{
              full_name
              email
              home_phone
              mobile_phone
              work_phone
            }
            approved_contact{
              full_name
              phone
              relation
            }
            room{
              name
            }
            location{
              name
              program
            }
            medical_record{
              allergies
              medications
              birthdate
            }
            pin_number
            enrollment_status
            id
            balence
          }
        }
    `;

    const UPDATE_BALANCE = `
        mutation updateBalance($myChild: ID!, $myBalance: Int) {
            updateChild(id: $myChild, data: {balence: $myBalance}) {
              id
            }
          }
    `;

    const GET_BALANCE = `
        query getBalance($myChild: ID!) {
            Child(where: {id: $myChild}) {
                        balence
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

    import materialCard from "~/components/material/AppCard";

    export default {
        layout: "frontdeskdashboard",
        components: {
            materialCard,
        },
        async asyncData() {
            const { data } = await graphql(ALL_CHILD);
            return {
                children: data.allChildren,
            };
        },
        data: () => ({
            search: "",
            headers: [
                {
                    text: "Student Name",
                    align: "left",
                    sortable: true,
                    value: "full_name",
                },
                { text: "PIN Number", value: "pin_number" },
                { text: "Lunch/Snack Balance", value: "balence" },

            ],
            selectedID: '',
            snackbar1: false,

        }),
        methods: {
            async getBalance() {
                const { data } = await graphql(GET_BALANCE, {
                    myChild: this.selectedID,
                });
                console.log("this childs id is " + this.selectedID)
                this.temp2 = (data.Child.balence - 5);
                console.log("tempBalance = " + this.tempBalance);
                console.log("balence = " + data.Child.balence);
                console.log(this.temp2);
                this.updateBalance();
            },
            async getBalanceSnack() {
                const { data } = await graphql(GET_BALANCE, {
                    myChild: this.selectedID,
                });
                console.log("this childs id is " + this.selectedID)
                this.temp2 = (data.Child.balence - 2);
                console.log("tempBalance = " + this.tempBalance);
                console.log("balence = " + data.Child.balence);
                console.log(this.temp2);
                this.updateBalance();
            },
            async updateBalance() {
                await graphql(UPDATE_BALANCE, {
                    myChild: this.selectedID,
                    myBalance: this.temp2,
                });
                this.snackbar1 = true;
            },
        }
    };
</script>
<!--Comment-->
