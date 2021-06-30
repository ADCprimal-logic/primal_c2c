<template>
<!-- Comment -->
      <v-layout justify-center>
          <material-card
            color="bluebird"
            elevation="12"
            title="Welcome to the Admin Login Portal!"
            height="400"
            width="400"
    >
            <v-card-text>
              <v-form>
                <v-text-field
                  type="text"
                  v-model="username"
                  prepend-icon="person"
                  name="username"
                  label="Email"
                  :placeholder="defaultUserPassword"
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="password"
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
                  @click.prevent="authenticate"
                  >Login</v-btn
                >
              </v-layout>
            </v-card-actions>
            <v-card-actions>
              <v-layout justify-center align-center>
                  <v-btn href="javascript:void( window.open( 'https://form.jotform.com/211805048797059', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "
                         color="bluebird">

                      Forgot Password?

                  </v-btn>
              </v-layout>
            </v-card-actions>
         </material-card>
      </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import materialCard from "~/components/material/AppCard";

export default {
  layout: 'logindashboard',
  components: {
    materialCard,
  },
  data() {
    return {
      username: "admin",
      password: "admin",
      defaultUserPassword: "admin",
      bottomNav: 'recent'
    };
  },
  computed: {
    isDisabled() {
      return (
        this.username !== this.defaultUserPassword ||
        this.password !== this.defaultUserPassword
      );
    },
  },
  methods: {
    ...mapActions({
      setUsername: "user/setUsername",
    }),

    async authenticate() {
      if (!this.isDisabled) {
        await this.setUsername(this.defaultUserPassword);
        this.$router.push({ path: "Admin-Dashboard" });
      }
    },
  },
};
</script>
