<!-- Comment -->
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
                              label="Search the newsletter!"
                              single-line
                              hide-details></v-text-field>
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
                                            label="News Letter Conent"
                                            :value=props.item.content
                                            disabled>
                                </v-textarea>
                                <v-btn disabled block color="black">Edit Newsletter</v-btn>
                                <v-card class="mx-auto"
                                        style="max-width: 500px;">
                                    <v-form ref="form"
                                            v-model="form"
                                            class="pa-4 pt-6">
                                        <v-text-field color="C2Cblue"
                                                      counter="60"
                                                      filled
                                                      round
                                                      label="Subject"
                                                      :value="mySubject = props.item.subject"
                                                      @input="mySubject = $event"
                                                      style="min-height: 96px"></v-text-field>
                                        <v-textarea outlined
                                                    name="Content"
                                                    label="Enter content here"
                                                    :value="myContent = props.item.content"
                                                    @input="myContent = $event"></v-textarea>
                                        <v-text-field color="C2Cblue"
                                                      label="Update Date Posted"
                                                      :value="myDate = props.item.date_posted"
                                                      @input="myDate = $event"></v-text-field>
                                        <v-textarea auto-grow
                                                    filled
                                                    color="C2Cblue"
                                                    label="Update Time Posted"
                                                    :value="myTime = props.item.time_posted"
                                                    @input="myTime = $event"
                                                    rows="1"></v-textarea>
                                    </v-form>
                                    <v-divider></v-divider>
                                    <v-card-actions>
                                        <v-btn text
                                               @click="$refs.form.reset()">
                                            Clear
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn :disabled="!form"
                                               :loading="isLoading"
                                               class="white--text"
                                               color="orange"
                                               depressed>Submit</v-btn>
                                    </v-card-actions>
                                    <v-dialog v-model="dialog"
                                              absolute
                                              max-width="400"
                                              persistent>
                                        <v-card>
                                            <v-card-title class="headline grey lighten-3">Legal</v-card-title>
                                            <v-card-text>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </v-card-text>
                                            <v-divider></v-divider>
                                            <v-card-actions>
                                                <v-btn text
                                                       @click="agreement = false, dialog = false">
                                                    No
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                                <v-btn class="white--text"
                                                       color="deep-purple accent-4"
                                                       @click="agreement = true, dialog = false">
                                                    Yes
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-card>



                                <!-- Name over Image -->
                                <!-- End of Fields -->




                            </v-responsive>
                        </template>
                    </v-data-table>
                </material-card>
                <material-card color="C2Cblue"
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
        layout: "admindashboard",
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
