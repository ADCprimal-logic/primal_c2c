<template>
  <!-- Comment -->
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="mint"
          title="Edit Child Profile"
          text="Use this page to update your contact, personal information and system avatar."
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
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
                    label="Mobile Phone"
                    class="purple-input"
                    :value="(myMobilePhone = todos.mobile_phone)"
                    @input="myMobilePhone = $event"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    label="Home Phone"
                    class="purple-input"
                    :value="(myHomePhone = todos.home_phone)"
                    @input="myHomePhone = $event"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    label="Work Phone"
                    class="purple-input"
                    :value="(myWorkPhone = todos.work_phone)"
                    @input="myWorkPhone = $event"
                  />
                </v-flex>
                <ul>
                  <li>
                    Your Children
                    <ul>
                      <li v-for="value in todos.child">
                        {{ value.first_name }} {{ value.last_name }}
                      </li>
                    </ul>
                  </li>
                </ul>

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
        query getParent($myid: ParentWhereUniqueInput!) {
          Parent(where: $myid) {
            first_name
            last_name
            email
            mobile_phone
            home_phone
            work_phone
            child {
              first_name
              last_name
            }

          }
        }
    `;
const UPDATE_PARENT = `
        mutation upParent($my_id: ID!, $firstname: String, $lastname: String, $myemail: String, $mymobilephone: String, $myhomephone: String, $myworkphone: String) {
                updateParent(id: $my_id, data: {first_name: $firstname, last_name: $lastname, email: $myemail,  mobile_phone: $mymobilephone, work_phone: $myworkphone,home_phone: $myhomephone}) {
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

function getUser(data) {
  return fetch("http://35.175.132.76:3000/api/auth/user/", {
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
  layout: "parentsdashboard",
  data() {
    return {
      fname: "",
      lname: "",
      my_email: "",
      myMobilePhone: "",
      myHomePhone: "",
      myWorkPhone: "",
    };
  },
  components: {
    materialCard,
  },
  methods: {
    async updateStaff() {
      await graphql(UPDATE_PARENT, {
        my_id: this.myParentID,
        firstname: this.fname,
        lastname: this.lname,
        myemail: this.my_email,
        mymobilephone: this.myMobilePhone,
        myhomephone: this.myHomePhone,
        myworkphone: this.myWorkPhone,
      });
      console.log(
        "i am updating id: " +
          this.myParentID +
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
        myParentID: responseUser.decoded.id,
        todos: data.Parent,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
