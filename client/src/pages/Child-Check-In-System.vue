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
                               title="Child Check In System"
                               text="Find a child and clock them in or out.">
                    <v-data-table :headers="headers"
                                  :items="children"
                                  :expand="expand"
                                  item-key="full_name"
                                  loading="true"
                                  :search="search"
                                  dark
                                  class>
                         <!---Start of table-->         
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
                                <td class="text-xs-left">{{ props.item.enrollment_status }}</td>
                            </tr>
                        </template>
                        <template v-slot:no-results>
                            <v-alert :value="true" color="error" icon="warning">
                                Your search for "{{ search }}" found no results.
                            </v-alert>
                        </template>
                        <!---Start of nested table-->
                        <template v-slot:expand="props">
                            <v-responsive :aspect-ratio="16/9">
                                <v-card-text>
                                    <v-layout row wrap align-right>
                                        <v-flex xs12 sm6 offset-sm3>
                                            <v-card color='C2Cblue'>
                                                <v-layout column fill-height>
                                                    <!-- Name over Image -->
                                                    <v-card-title class="justify-center align-center white--text text-center pl-26 pt-26" >
                                                        {{props.item.first_name}}'s time clock data is printed below.
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
                                                    <!-- Start of a field -->
                                                    <v-list-tile @click="" v-for="value in props.item.parent">
                                                        <v-list-tile-action>
                                                            <v-icon color="mint">mdi-alarm-multiple</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.parent">{{value.full_name}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>

                                                            <v-list-tile-sub-title>
                                                                Time punch
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-list-tile @click="" v-for="value in props.item.parent">
                                                        <v-list-tile-action>
                                                            <v-icon color="mint">mdi-alarm-multiple</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.parent">{{value.full_name}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>

                                                            <v-list-tile-sub-title>
                                                                Time Punch
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <v-list-tile @click="" v-for="value in props.item.parent">
                                                        <v-list-tile-action>
                                                            <v-icon color="mint">mdi-alarm-multiple</v-icon>
                                                        </v-list-tile-action>

                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-if="props.item.parent">{{value.full_name}}</v-list-tile-title>
                                                            <v-list-tile-title v-else>n/a</v-list-tile-title>

                                                            <v-list-tile-sub-title>
                                                                Time Punch
                                                            </v-list-tile-sub-title>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                    <!-- Field Divider -->
                                                                                                                                                      <v-btn
                                                    block
                                                    color="C2Cblue"
                                                    round
                                                    class = "C2Corange--text"
                                                  >
                                                  Click here to sign the student in!
                                                  </v-btn>                     
                                                  <v-btn
                                                    block
                                                    color="C2Corange"
                                                    round
                                                    class = "C2Cblue--text"
                                                  >
                                                  Click here to sign out the student!
                                                  </v-btn>


                                      
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
        layout: "dashboard",
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
                { text: "Recent time punch", value: "gender" },
                { text: "Clocked in or out", value: "medical_record.birthdate" },
                { text: "Location", value: "_id" },
                { text: "Enrolled Status", value: "enrollment_status" },
            ],

        }),
    };
</script>
<!--Comment-->