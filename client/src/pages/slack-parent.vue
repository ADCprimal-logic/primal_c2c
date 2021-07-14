<template>
  <!-- Comment -->
  <v-layout justify-center align-center>
    <material-card
      color="bluebird"
      elevation="12"
      title="C2C Messenger"
      subtitle = "Login to our secure Slack channel to communicate and share information."
      height="auto"
      width="auto"
    >
      <v-card-actions>
        <v-layout justify-center align-center>
          <v-btn
            href="javascript:void( window.open( 'https://c2c-children-connect.slack.com', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "
            color="bluebird"
          >
            Messenger
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
  layout: "parentsdashboard",
  components: {
    materialCard,
  },
};
</script>
