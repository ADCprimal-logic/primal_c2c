<!-- Comment -->
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
          label="Search for a person by name to view the time clock data."
          single-line
          hide-details
        ></v-text-field>
        <material-card
          color="bluebird"
          title="Time Clock Data"
          text="All time card records in the system reside here. Find the person and edit the time sheet."
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
          <td class="text-xs-left">{{ props.item.room.name }}</td>
          <td class="text-xs-left">{{ props.item.Allergies }}</td>
          <td class="text-xs-left">{{ props.item.enrollment_status }}</td>
        </tr>
        </template>
           <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
        </template>
        <template v-slot:expand="expandedprops">
        <v-responsive :aspect-ratio="16 / 9">
          <v-card-text>
            <v-layout row wrap align-right>
              <v-container
    fill-height
    fluid
    grid-list-xl
  >
      <v-layout
      justify-center
      align-center
      span
      wrap
    >
    <!-- End of chart sizing params -->
  <div>
    <v-toolbar flat color="white">

      <v-toolbar-title> Time Card Data </v-toolbar-title>
      <!-- Clock in Chart Title  -->
      <v-spacer></v-spacer>
      <!-- Constructor for the pop out diag allowing for edits to the fields -->
    </v-toolbar>
    <!-- Binds to object creation and defines header and item data. Elevations define data chart shadow-->
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
    <!-- Constructor for visulation of data. These are the real headers of the chart. -->
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.Date }}</td>
        <td class="text-xs-right">{{ props.item.Time }}</td>
        <td class="text-xs-right">{{ props.item.Status }}</td>
        <td class="text-xs-right">{{ props.item.Hours }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <!-- Defines what is done when trash can is clicked-->
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <!-- Defines what is done when there is no data in availble. Initialize refills the data from the server -->
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
      </v-layout>
  </v-container>
  
            </v-layout>
          </v-card-text>
        </v-responsive>
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
  layout: "admindashboard",
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
  }),
};
</script>