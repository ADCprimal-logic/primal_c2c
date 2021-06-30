<template>
  <!-- Comment -->
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="mint"
          title="Edit Staff Profile"
          text="Use this page to update your contact, personal information and system avatar."
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    :value="todos[0].location.name"
                    label="Work Location"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    :value="my_email = todos[0].email"
                    @input="my_email = $event"
                    label="Email Address"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    label="First Name"
                    class="purple-input"
                    @input="fname = $event"
                    :value="fname = todos[0].first_name"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    :value="lname = todos[0].last_name"
                    @input="lname = $event"
                    label="Last Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Phone Number" class="purple-input" :value="my_phone = todos[0].location.phone" @input="my_phone = $event"
                /></v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Address" class="purple-input" :value="my_address = todos[0].location.street_Address" @input="my_address = $event"
                />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="City" class="purple-input" :value="todos[0].location.city"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="State" class="purple-input" :value="todos[0].location.state"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    :value="todos[0].location.country"
                    label="Country"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    :value="todos[0].location.zip"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="mint"
                    @click="updateStaff()"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="" />
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">
              {{ user.function }}
            </h6>
            <h4 class="card-title font-weight-light">{{ fullname }}</h4>
            <p class="card-description font-weight-light">
              {{ user.description }}
            </p>
            <blockquote class="blockquote">{{ user.citation }}</blockquote>
            <v-btn color="mint" round class="font-weight-light">Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
const GET_TODOS = `
	    query{
        allStaffMembers(where: {email_contains: "@yahoo.com"}){
          first_name
          last_name
          email
          phone
          location {
            name
            street_Address
            city
            state
            country
            zip
          }
        }
      }
	`;
const UPDATE_STAFF = `
	    mutation upStaff($my_id: ID!, $firstname: String, $lastname: String, $myemail: String, $myphone: String) {
            updateStaffMember(id: $my_id, data: {first_name: $firstname, last_name: $lastname, email: $myemail, password: "Password123", phone: $myphone}) {
              id
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

import { mapGetters } from "vuex";
import materialCard from "~/components/material/AppCard";

export default {
    layout: "frontdeskdashboard",
    data() {
        return {
            id: 6,
            fname: '',
            lname: '',
            my_email: '',
            my_phone: '',
        };
    },
    components: {
    materialCard,
    },
    methods: {
        async updateStaff() {
            await graphql(UPDATE_STAFF, { my_id: this.id, firstname: this.fname, lastname: this.lname, myemail: this.my_email, myphone: this.my_phone });
            console.log("i am updating id: " + this.id + " for " + this.fname + " " + this.lname);
    },
    },
    computed: {
    ...mapGetters({
        user: "user/getUser",
        fullname: "user/getFullname",
    }),
    },
    // Get the todo items on server side
    async asyncData() {
    const { data } = await graphql(GET_TODOS);
    return {
        todos: data.allStaffMembers,
    };
    },
};
</script>
