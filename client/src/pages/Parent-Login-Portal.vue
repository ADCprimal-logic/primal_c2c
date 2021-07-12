<template>
  <!-- Comment -->
  <v-layout justify-center>
    <material-card
      color="bluebird"
      elevation="12"
      title="Welcome to the Parent Login Portal!"
      height="400"
      width="400"
    >
      <v-card-text>
        <v-form>
          <v-text-field
            type="text"
            v-model="login.email"
            prepend-icon="person"
            name="username"
            label="Email"
            :placeholder="defaultUserPassword"
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="login.password"
            prepend-icon="lock"
            name="password"
            label="Password"
            :placeholder="defaultUserPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-layout justify-center align-center>
          <v-btn
            color="bluebird"
            :disabled="isDisabled"
            @click.prevent="userLogin"
            >Login</v-btn
          >
        </v-layout>
      </v-card-actions>
      <v-card-actions>
        <v-layout justify-center align-center>
          <v-btn
            href="javascript:void( window.open( 'https://form.jotform.com/211805048797059', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "
            color="bluebird"
          >
            Forgot Password?
          </v-btn>
        </v-layout>
      </v-card-actions>
    </material-card>
    <v-snackbar :color="color1" :top="true" v-model="snackbar3">
      <v-icon color="white" class="mr-3"> mdi-alert-circle </v-icon>
      <div>Invalid Email</div>
      <v-icon size="16" @click="snackbar3 = false"> mdi-close-circle </v-icon>
    </v-snackbar>
    <v-snackbar :color="color1" :top="true" v-model="snackbar4">
      <v-icon color="white" class="mr-3"> mdi-alert-circle </v-icon>
      <div>Invalid Password</div>
      <v-icon size="16" @click="snackbar4 = false"> mdi-close-circle </v-icon>
    </v-snackbar>
  </v-layout>
</template>

<script>
function login(data) {
  return fetch(process.env.baseUrl + "/api/auth/login", {
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

import { mapActions } from "vuex";
import materialCard from "~/components/material/AppCard";

export default {
  layout: "logindashboard",
  components: {
    materialCard,
  },
  data() {
    return {
      defaultUserPassword: "***",
      bottomNav: "recent",
      login: {
        email: "",
        password: "",
        role: "Parent",
      },
      snackbar3: false,
      snackbar4: false,
      color1: "C2Corange",
    };
  },
  computed: {
    isDisabled() {
      return this.login.email === "" || this.login.password === "";
    },
  },
  methods: {
    ...mapActions({
      setUsername: "user/setUsername",
    }),
    async userLogin() {
      console.log("Running Login");
      try {
        let responseLogin = await login(this.login);
        console.log(responseLogin);
        if (responseLogin.status === 200) {
          console.log("Go to Dashboard");
          localStorage.setItem("auth_token", responseLogin.accessToken);
          var token = localStorage.getItem("auth_token");
          let responseUser = await getUser(token);
          console.log(responseUser);
          await this.setUsername(responseUser.decoded.name);
          this.$router.push({ path: "Parents-Dashboard" });
        } else {
          console.log(responseLogin);
        }
        if (responseLogin.status === 500) {
          console.log(
            "This is in case user is invalid. User doesn't exist (might be a parent account)"
          );
          this.snackbar3 = true;
        }
        if (responseLogin.status === 401) {
          console.log("Invalid Password!");
          this.snackbar4 = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
