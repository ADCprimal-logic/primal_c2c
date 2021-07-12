<template>
  <!-- Comment -->
  <v-container fluid fill-height>
    <v-container>
      <v-layout wrap>
        <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="green"
            icon="mdi-cash"
            title="Total Revenue"
            value="65,000"
            small-value="$"
            sub-icon="mdi-calendar"
            sub-text="Annual"
          />
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="bluebird"
            icon="mdi-cash"
            title="Pending Payments"
            small-value="$"
            value="5200"
            sub-icon="mdi-alert"
            sub-icon-color="gray"
            sub-text="Get More Space..."
            sub-text-color="text-primary"
          />
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="red"
            icon="mdi-alert"
            title="Past Due"
            value="7500"
            small-value="$"
            sub-icon="mdi-tag"
            sub-text="Tracked from Stripe"
          />
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="mint"
            icon="mdi-account"
            title="StripeStatus"
            value="Active"
            sub-icon="mdi-check"
            sub-text="Online"
          />
        </v-flex>
      </v-layout>
      <v-layout justify-center wrap text-center fluid>
        <v-img
          src="https://primal-c2c-images.s3.amazonaws.com/static/Stripe+Dashboard.JPG"
          fluid
        ></v-img>
      </v-layout>
      <v-layout justify-center wrap text-center fluid>
        <v-btn color="bluebird" href="https://dashboard.stripe.com/login">
          Proceed to Stripe dashboard</v-btn
        >
      </v-layout>
      <v-card></v-card>
    </v-container>
  </v-container>
</template>

<script>
const ALL_CHILD = `
query{
  allChildren{
    full_name
    gender
    parent{
      full_name
      email
      home_phone
      mobile_phone
      work_phone
    }
    approved_contact{
      full_name
      phone
      relation
    }
    room{
      name
    }
    medical_record{
      allergies
      medications
      birthdate
    }
    pin_number
    enrollment_status
  }
}
`;

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
    headers: [
      {
        text: "Student Name",
        align: "left",
        sortable: true,
        value: "full_name",
      },
      { text: "Gender(M/F)", value: "gender" },
      { text: "Date of Birth", value: "medical_record.birthdate" },
      { text: "Location", value: "_id" },
      { text: "Allergies", value: "medical_record.allergies" },
      { text: "Status (In/Out)", value: "enrollment_status" },
    ],
  }),
};
</script>
