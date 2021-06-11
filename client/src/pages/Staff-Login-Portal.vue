<template>
  <!-- Comment -->
  <v-layout justify-center>
    <material-card
      color="bluebird"
      elevation="12"
      title="Welcome to the Staff Login Portal!"
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
            color="bluebird"
            :disabled="isDisabled"
            @click.prevent="userLogin"
            >Forgot Password?</v-btn
          >
        </v-layout>
      </v-card-actions>
    </material-card>
  </v-layout>
</template>

<script>
function login(data) {
  return fetch("http://localhost:3000/api/auth/login/", {
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
  return fetch("http://localhost:3000/api/auth/user/", {
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
        role: "Staff",
      },
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
          let responseUser = await getUser(responseLogin.accessToken);
          console.log(responseUser);
          await this.setUsername(responseUser.decoded.name);
          this.$router.push({ path: "dashboard" });
        } else {
          console.log(responseLogin);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
