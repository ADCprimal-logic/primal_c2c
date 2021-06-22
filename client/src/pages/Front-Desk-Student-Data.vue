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
                              label="Search for a student by any associated data."
                              single-line
                              hide-details></v-text-field>
                <material-card color="C2Cblue"
                               title="Student Data"
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
                                <td class="text-xs-left">{{ props.item.gender }}</td>
                                <td class="text-xs-left" v-if="props.item.medical_record">
                                    {{ props.item.medical_record.birthdate }}
                                </td>
                                <td class="text-xs-left" v-else>n/a</td>
                                <td class="text-xs-left" v-if="props.item.location">{{ props.item.location.name }}</td>
                                <td class="text-xs-left" v-else>n/a</td>
                                <td class="text-xs-left" v-if="props.item.medical_record">{{ props.item.medical_record.allergies }}</td>
                                <td class="text-xs-left" v-else>n/a</td>
                                <td class="text-xs-left">{{ props.item.enrollment_status }}</td>
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
                                                    <v-card-title class="white--text text-center pl-26 pt-26" row align-center>
                                                        {{props.item.first_name}}'s data is printed below.
                                                    </v-card-title>
                                                </v-layout>
                                                <!-- Defines the two lines in each data field -->
                                                <v-list two-line>
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action> </v-list-tile-action>
                                                        <!-- A line of expanded data in the table -->
                                                        <v-list-tile-content>
                                                            <v-list-tile-title>{{props.item.full_name}}</v-list-tile-title>
                                                            <v-list-tile-sub-title>Child's Full Name</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Start of a field -->
                                                    <v-list-tile @click="" v-for="value in props.item.parent">
                                                        <v-list-tile-action>
                                                            <v-icon color="C2Corange">phone</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.parent">{{value.full_name}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>

                                                            <v-list-tile-sub-title>
                                                                Guardian Full Name
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-list-tile @click="" v-for="value in props.item.parent">
                                                        <v-list-tile-action>
                                                            <v-icon color="C2Corange">phone</v-icon>
                                                        </v-list-tile-action>
                                                        <v-list-tile-content>
                                                            <v-list-tile-title>{{value.mobile_phone}}</v-list-tile-title>
                                                            <v-list-tile-sub-title>
                                                                Guardian's Mobile Phone ({{value.full_name}})

                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>

                                                    <v-list-tile @click="" v-for="value in props.item.parent">
                                                        <v-list-tile-action>
                                                            <v-icon color="C2Corange">mail</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title>{{value.email}}</v-list-tile-title>
                                                            <v-list-tile-sub-title>Guardian's Email ({{value.full_name}})</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                    <v-divider inset></v-divider>

                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="C2Corange">mdi-pill</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.medical_record">{{ props.item.medical_record.medications}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            <v-list-tile-sub-title>Known Medications</v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->
                                                    <v-list-tile @click="">
                                                        <v-list-tile-action>
                                                            <v-icon color="C2Corange">mdi-alert-decagram</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.medical_record">{{ props.item.medical_record.allergies}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            <v-list-tile-sub-title>Known Allergies</v-list-tile-sub-title>
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
                                                            <v-icon color="C2Corange">mdi-hospital-marker</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.location">{{ props.item.location.name }}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            <v-list-tile-sub-title>Camp Location</v-list-tile-sub-title>
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
                                                                Future Update
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-divider inset></v-divider>
                                                    <!-- Field Divider -->
                                                    <v-list-tile @click="" v-for="value in props.item.approved_contact">
                                                        <v-list-tile-action>
                                                            <v-icon color="C2Corange">mdi-message-bulleted</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="value.full_name">{{value.full_name}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            <!--
                                                                <v-list-tile-title v-if="value.relation">Relation: {{value.relation}}</v-list-tile-title>
                                                                <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                                <v-list-tile-title v-if="value.phone">Phone: {{value.phone}}</v-list-tile-title>
                                                                <v-list-tile-title v-else>n/a</v-list-tile-title>
                                                            -->
                                                            <v-list-tile-sub-title>Approved Contact</v-list-tile-sub-title>
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
                { text: "Gender(M/F)", value: "gender" },
                { text: "Date of Birth", value: "medical_record.birthdate" },
                { text: "Location", value: "_id" },
                { text: "Allergies", value: "medical_record.allergies" },
                { text: "Status (In/Out)", value: "enrollment_status" },
            ],
            studentData: [
                {
                    name: "Chris Cooper",
                    Gender: "Male",
                    dateofBirth: "9/6/1992",
                    Location: "Homeroom",
                    Allergies: "Peanuts",
                    Email: "cooperc2606@gmail.com",
                    Status: "Clocked In",
                    TuitionBalance: "0",
                    Medications: "0",
                    approvedcontactName: "asdf",
                    approvedcontactPhone: "0",
                    approvedcontactEmail: "0",
                    apporvedcontactAddress: "0",
                    approvedcontactRelationship: "0",
                    approvedcontactPIN: "0",
                },
                {
                    name: "Chris Cooper3",
                    Gender: "Male",
                    dateofBirth: "9/6/1992",
                    Location: "Homeroom 6",
                    Phone: "843-324-1344",
                    Email: "cooperc2606@gmail.com",
                    Status: "Clocked In",
                },
                {
                    name: "Chris Cooper2",
                    Gender: "Male",
                    dateofBirth: "9/6/1992",
                    Location: "Homeroom 77",
                    Phone: "843-324-1344",
                    Email: "cooperc2606@gmail.com",
                    Status: "Clocked In",
                },
            ],
        }),
    };
</script>
<!--Comment-->
