<template>
  <!-- Comment -->
  <v-container fluid fill-height>
    <v-container>
            <v-card></v-card>
      <v-layout justify-center fluid wrap text-center>
        <v-img
          fluid
          wrap
          height="150px"
          width="200px"
          src="https://primal-c2c-images.s3.amazonaws.com/static/adminUI.JPG" 
          rounded
        ></v-img>
      </v-layout>

      <v-layout justify-center wrap text-center fluid>
        <v-btn round color="bluebird" href="http://34.234.191.221:3000/admin">
          Proceed to DB editor</v-btn
        >
      </v-layout>
      
      <v-card></v-card>
    </v-container>
  </v-container>
</template>

<script>

import materialCard from "~/components/material/AppCard";
import materialChartCard from "~/components/material/AppChartCard";
import materialStatsCard from "~/components/material/AppStatsCard";

export default {
  layout: "admindashboard",
  middleware: "authentication",
  components: {
    materialCard,
    materialChartCard,
    materialStatsCard,
  },
  data: () => ({
    search: "",
  }),
};
</script>
