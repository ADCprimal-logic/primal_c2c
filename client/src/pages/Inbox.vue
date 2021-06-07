<template>
<!-- Comment -->
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search by any associated data"
        single-line
        hide-details
      ></v-text-field>
        <material-card
          color="bluebird"
          title="Inbox"
          text="Recieved messages"
        >
          <v-data-table
                  :headers="headers"
                  :items="children"
                  :expand="expand"
                  item-key="full_name"
                  loading="true"
                  :search="search"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
          <template v-slot:items="props">
          <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.full_name }}</td>
          <td class="text-xs-left">{{ props.item.gender }}</td>
          <td class="text-xs-left">{{ props.item.medical_record.birthdate }}
          </td>
          <td class="text-xs-left">{{ props.item._id }}</td>
          <td class="text-xs-left">{{ props.item.Allergies }}</td>
          <td class="text-xs-left">{{ props.item.enrollment_status }}</td>
        </tr>
      </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
      >
        <material-card
          color="green"
          flat
          full-width
          title="Outbox"
          text="Sent and draft messages"
        >
          <v-data-table
            :headers="headers"
            hide-actions
          >
            <template
              slot="headerCell"
            >
            </template>
            <template
            >
              <td></td>
              <td></td>
              <td></td>
              <td class="text-xs-right"></td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
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

function graphql(query, variables = {}) {
  return fetch("http://localhost:3000/admin/api", {
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

import materialCard from "~/components/material/AppCard";

export default {
  layout: "dashboard",
  components: {
    materialCard,
  },
  async asyncData() {
    const { data } = await graphql(ALL_CHILD);
    return {
      children: data.allChildren,
    };
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
    studentData: [
      {
        name: "Chris Cooper",
        Gender: "Male",
        dateofBirth: "9/6/1992",
        Location: "Homeroom",
        Allergies: "Peanuts",
        Email: "cooperc2606@gmail.com",
        Status: "Clocked In",
        TuitionBalance: "0",
        Medications: "0",
        approvedcontactName: "asdf",
        approvedcontactPhone: "0",
        approvedcontactEmail: "0",
        apporvedcontactAddress: "0",
        approvedcontactRelationship: "0",
        approvedcontactPIN: "0",
      },
      {
        name: "Chris Cooper3",
        Gender: "Male",
        dateofBirth: "9/6/1992",
        Location: "Homeroom 6",
        Phone: "843-324-1344",
        Email: "cooperc2606@gmail.com",
        Status: "Clocked In",
      },
      {
        name: "Chris Cooper2",
        Gender: "Male",
        dateofBirth: "9/6/1992",
        Location: "Homeroom 77",
        Phone: "843-324-1344",
        Email: "cooperc2606@gmail.com",
        Status: "Clocked In",
      },
    ],
    onetimepin: "admin",

    bottomNav: 'recent',
    computed: {
    isDisabled() {
      return (
        this.otp !== this.onetimepin
      );
    },
  },
  }),
};

</script>
