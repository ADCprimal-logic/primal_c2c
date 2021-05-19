<template>
<!-- Comment -->
      <v-layout justify-center>
          <material-card
            color="dark gray"
            elevation="12"
            title="Welcome Parents!"

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
                  color="blue"
                  :disabled="isDisabled"
                  @click.prevent="authenticate"
                  >Login</v-btn
                >
              </v-layout>
            </v-card-actions>
            <v-card-actions>
              <v-layout justify-center align-center>
                <v-btn
                  color="blue"
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
        this.$router.push({ path: "Parents-Dashboard" });
      }
    },
  },
};
</script>
