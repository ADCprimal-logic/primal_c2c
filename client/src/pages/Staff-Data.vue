<template>
    <!-- Comment -->
    <v-container fill-height
                 fluid
                 grid-list-xl>
        <v-layout justify-center
                  wrap>
            <v-flex md12>
                <v-text-field v-model="search"
                              append-icon="search"
                              label="Search for a staff member by any associated data."
                              single-line
                              hide-details></v-text-field>
                <material-card color="C2Cblue"
                               title="Staff Data"
                               text="Expands to show detailed data on the child.">
                    <v-data-table :headers="headers"
                                  :items="allStaff"
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
                            <tr>
                                <td>{{ props.item.full_name }}</td>
                                <td class="text-xs-left" v-if="props.item.role === 1">General</td>
                                <td class="text-xs-left" v-else-if="props.item.role === 2">Front-Desk</td>
                                <td class="text-xs-left" v-else-if="props.item.role === 3">Director</td>
                                <td class="text-xs-left" v-else>n/a</td>

                                <td class="text-xs-left">{{ props.item.email }}</td>
                                <td class="text-xs-left">{{ props.item.phone }}</td>
                                <td class="text-xs-left" v-if="props.item.location">{{ props.item.location.name }}</td>
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
                                                    <v-card-title class="white--text pl-26 pt-26" row wrap align-right>
                                                        {{props.item.first_name}}'s data is printed below.
                                                    </v-card-title>
                                                </v-layout>
                                                <!-- Defines the two lines in each data field -->
                                                <v-list two-line>
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action> </v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->
                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Child name goes here</v-list-tile-title>
                                                            <v-list-tile-sub-title>Childs Full Name</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Start of a field -->
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="bluebird">phone</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                                                            <v-list-tile-sub-title>
                                                                Guardian Full Name / Guardian Mobile
                                                                Number
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="bluebird">phone</v-icon>
                                                        </v-list-tile-action>
                                                        <v-list-tile-content>
                                                            <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                                                            <v-list-tile-sub-title>
                                                                Guardian Full Name / Guardian Mobile
                                                                Number
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>

                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="bluebird">mail</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                                                            <v-list-tile-sub-title>Guardian Email</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>

                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="bluebird">mdi-pill</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Some medication is imported here</v-list-tile-title>
                                                            <v-list-tile-sub-title>Known Medications</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="#FF1744">mdi-alert-decagram</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Some Allergy goes here</v-list-tile-title>
                                                            <v-list-tile-sub-title>Known Phone</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->

                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="#43A047">mdi-currency-usd</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Tuition Paid: () Tuition Owed: ()</v-list-tile-title>
                                                            <v-list-tile-sub-title>Balance</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->

                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="bluebird">mdi-hospital-marker</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Location goes here</v-list-tile-title>
                                                            <v-list-tile-sub-title>Homeroom</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->

                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="#AEEA00">mdi-needle</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Immuniziations</v-list-tile-title>
                                                            <v-list-tile-sub-title>
                                                                Click here to expand
                                                                immuniziations
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="bluebird">mdi-message-bulleted</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>Approved Contacts</v-list-tile-title>
                                                            <v-list-tile-sub-title>Click here to expand</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
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

        </v-layout>
    </v-container>
</template>

<script>



    const ALL_STAFF = `
        query{
          allStaffMembers{
            full_name
            role
            email
            phone
            location {
              name
            }
          }
        }
    `;

    function graphql(query, variables = {}) {
        return fetch("http://35.175.132.76:3000/admin/api", {
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
        layout: "dashboard",
        components: {
            materialCard,
        },
        async asyncData() {
            const { data } = await graphql(ALL_STAFF);
            return {
                allStaff: data.allStaffMembers,
            };
        },
        data: () => ({
            search: "",
            headers: [
                {
                    text: "Staff Name",
                    align: "left",
                    sortable: true,
                    value: "full_name",
                },
                { text: "Role", value: "role" },
                { text: "Email", value: "email" },
                { text: "Phone", value: "phone" },
                { text: "Location", value: "location.name" },
                
            ],
        }),
    };
</script>
