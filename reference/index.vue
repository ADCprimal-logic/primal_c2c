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
            color="bluebird"
            :disabled="isDisabled"
            @click.prevent="authenticate"
            >Forgot Password?</v-btn
          >
        </v-layout>
      </v-card-actions>
    </material-card>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import materialCard from "~/components/material/AppCard";

export default {
  layout: "logindashboard",
  components: {
    materialCard,
  },
  data() {
    return {
      username: "admin",
      password: "admin",
      defaultUserPassword: "***",
      bottomNav: "recent",
      login: {
        email: "",
        password: "",
        role: "Parent",
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

    async authenticate() {
      if (!this.isDisabled) {
        await this.setUsername(this.defaultUserPassword);
        this.$router.push({ path: "dashboard" });
      }
    },
    async userLogin() {
      console.log("Running Login");
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
        this.$router.push({ path: "dashboard" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
