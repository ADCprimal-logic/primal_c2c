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
                    :value="todos.location.name"
                    label="Work Location"
                    class="purple-input"
                    disabled
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    :value="(my_email = todos.email)"
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
                    :value="(fname = todos.first_name)"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    :value="(lname = todos.last_name)"
                    @input="lname = $event"
                    label="Last Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    label="Phone Number"
                    class="purple-input"
                    :value="(my_phone = todos.phone)"
                    @input="my_phone = $event"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    label="Work Address"
                    disabled
                    class="purple-input"
                    :value="(my_address = todos.location.street_Address)"
                    @input="my_address = $event"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="City"
                    class="purple-input"
                    :value="todos.location.city"
                    disabled
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="State"
                    class="purple-input"
                    :value="todos.location.state"
                    disabled
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    :value="todos.location.country"
                    label="Country"
                    class="purple-input"
                    disabled
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    :value="todos.location.zip"
                    disabled
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
      
    </v-layout>
  </v-container>
</template>

<script>
const GET_TODOS = `
      query getStaff($myid: StaffMemberWhereUniqueInput!) {
        StaffMember(where: $myid) {
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

export default {
  layout: "dashboard",
  data() {
    return {
      id: 6,
      fname: "",
      lname: "",
      my_email: "",
      my_phone: "",
    };
  },
  components: {
    materialCard,
  },
  methods: {
    async updateStaff() {
      await graphql(UPDATE_STAFF, {
        my_id: this.myStaffID,
        firstname: this.fname,
        lastname: this.lname,
        myemail: this.my_email,
        myphone: this.my_phone,
      });
      console.log(
        "i am updating id: " +
          this.myStaffID +
          " for " +
          this.fname +
          " " +
          this.lname
      );
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
    try {
      var token = await localStorage.getItem("auth_token");
      var responseUser = await getUser(token);
      const { data } = await graphql(GET_TODOS, {
        myid: { id: responseUser.decoded.id },
      });
      console.log(responseUser.decoded.id);
      return {
        myStaffID: responseUser.decoded.id,
        todos: data.StaffMember,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
