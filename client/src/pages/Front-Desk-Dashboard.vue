<!-- Comment -->
<template>
    <!-- Comment -->
    <v-container fill-height
                 fluid
                 grid-list-xl>
        <v-layout justify-center
                  wrap>
            <v-flex md12>
                <!--
                    <v-text-field v-model="search"
                              append-icon="search"
                              label="Search the newsletter!"
                              single-line
                              hide-details></v-text-field>
                              a depricated search bar used to reside here
                -->              
                    <material-card color="C2Cblue"
                               title="News Letters"
                               text="This table shows all previously posted newsletters.">
                    <v-data-table :headers="headers"
                                  :items="currentNewsletter"
                                  :expand="expand"
                                  item-key="subject"
                                  loading="true"
                                  :search="search">
                        <template slot="headerCell"
                                  slot-scope="{ header }">
                            <span class="subheading font-weight-light text-success text--darken-3"
                                  v-text="header.text" />
                        </template>
                        <template v-slot:items="props">
                            <tr @click="props.expanded = !props.expanded">
                                <td class="text-xs-left">{{ props.item.subject }}</td>
                                <td class="text-xs-left">{{ props.item.date_posted }}</td>
                                <td class="text-xs-left">{{ props.item.time_posted }}</td>
                            </tr>
                        </template>
                        <template v-slot:no-results>
                            <v-alert :value="true" color="error" icon="warning">
                                Your search for "{{ search }}" found no results.
                            </v-alert>
                        </template>
                        <template v-slot:expand="props">
                            <v-responsive :aspect-ratio="16 / 9">


                                <v-textarea outlined
                                            name="Content"
                                            label="News Letter Content"
                                            :value=props.item.content
                                            readonly
                                            >
                                </v-textarea>
                                <v-card class="mx-auto"
                                        style="max-width: 500px;">
                                        <v-spacer></v-spacer>


                                            <v-divider></v-divider>

                                                <v-spacer></v-spacer>


                                        </v-card>
                                <!-- End of Fields -->
                            </v-responsive>
                        </template>
                    </v-data-table>
                </material-card>
                <!--<material-card color="C2Cblue"
                               title="Create a News Letter"
                               >
                    <v-form>
                        <v-container py-0>
                            <v-layout wrap>
                                <v-flex xs12 md12>
                                    <v-text-field v-model="mySubject"
                                                  label="Subject"
                                                  class="purple-input" />
                                </v-flex>
                                <v-flex xs12 md12>
                                    <v-text-field label="Content"
                                                  class="purple-input"
                                                  v-model="myContent" />
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field v-model="myDate"
                                                  label="Date Posted"
                                                  class="purple-input" />
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field label="Time Posted"
                                                  class="purple-input"
                                                  v-model="myTime" />
                                </v-flex>
                                <v-flex xs12 md12>
                                    <v-select label="Location"
                                              v-model="myLocation"
                                              :items="locations"
                                              />
                                </v-flex>
                                
                                <v-flex xs12 text-xs-right>
                                    <v-btn class="mx-0 font-weight-light"
                                           color="mint"
                                           @click="determineLocation()">
                                        Post Newsletter
                                    </v-btn>
                                </v-flex>
                                <h4 v-if="this.posted === true">Newsletter posted Successfully!</h4> 
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
                --> 
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    const allNewsletters = `
        query{
            allNewsletters{
            subject
            content
            date_posted
            time_posted
            }
        }
    `;
    const POST_NEWS = `
        mutation postNewsletters($mysubject: String, $mycontent: String, $mydate: String, $mytime: String, 
  $mylocation: LocationRelateToOneInput) {
            createNewsletter(data: {subject: $mysubject, content: $mycontent, date_posted: $mydate, time_posted: $mytime, 
              basedFrom: $mylocation}) {
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

    import materialCard from "~/components/material/AppCard";

    export default {
        data() {
            return {
                mySubject: '',
                myContent: '',
                myDate: '',
                myTime: '',
                myLocation: '',
                locationID: '',
                locations: ["Greenville", "Spartanburg"],
                search: "",
                headers: [
                    { text: "Subject", value: "item.subject" },
                    { text: "Date Posted", value: "item.date_posted" },
                    { text: "Time Posted", value: "item.time_posted" },
                ],
                posted: '',
            };
        },
        layout: "frontdeskdashboard",
        components: {
            materialCard,
        },
        methods: {
            determineLocation() {
                if (this.myLocation == "Greenville") {
                    this.locationID = 4;
                } else if (this.myLocation == "Spartanburg") {
                    this.locationID = 3;
                } else {
                    console.log("Location/Program could not be determined");
                }
                console.log("determine location ran");

                this.postNewsletter();
            },
            async postNewsletter() {
                await graphql(POST_NEWS, {
                    mysubject: this.mySubject,
                    mycontent: this.myContent,
                    mydate: this.myDate,
                    mytime: this.myTime,
                    mylocation: { connect: { id: this.locationID } },
                });
                console.log("newsletter posted");
                this.posted = true;
                this.mySubject = '';
                this.myContent = '';
                this.myTime = '';
                this.myDate = '';
                this.myLocation = '';
            },
        },
        async asyncData() {
            const { data } = await graphql(allNewsletters);
            return {
                currentNewsletter: data.allNewsletters,
            };
        },
        
    };
</script>
