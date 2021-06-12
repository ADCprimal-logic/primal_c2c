<!-- Comment -->
<template>
<!-- Comment -->
  <v-container
    fill-height
    fluid
    grid-list-xl
    dark
    class
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
          label="Search for a student by any associated data."
          single-line
          hide-details
        ></v-text-field>
        <material-card
          color="bluebird"
          title="Student Data"
          text="Expands to show detailed data on the child. For faster access, keep open in another tab!"
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
           <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
        </template>
        <template v-slot:expand="props">
        <v-responsive :aspect-ratio="16 / 9">
          <v-card-text>
            <v-layout row wrap align-right>
              <v-flex xs12 sm6 offset-sm3>
                <v-card color = '#698390'>
                    <v-layout column fill-height>
                      <!-- Name over Image -->
                      <v-card-title class="black--text pl-5 pt-5" row wrap align-right>
                        <div class="display-1 pl-5 pt-5">
                          {{ props.item.full_name }}
                        </div>
                        
                      </v-card-title>
                    </v-layout>
                  <!-- Defines the two lines in each data field -->
                  <v-list two-line>
                    <v-list-tile @click="">
                      <v-list-tile-action> </v-list-tile-action>
                      <!-- A line of expanded data in the table -->
                      <v-list-tile-content>
                        <v-list-tile-title
                          >Child name goes here</v-list-tile-title
                        >
                        <v-list-tile-sub-title
                          >Childs Full Name</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <!-- Start of a field -->
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="bluebird">phone</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                        <v-list-tile-sub-title
                          >Guardian Full Name / Guardian Mobile
                          Number</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <!-- Field Divider -->
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="bluebird">phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                        <v-list-tile-sub-title
                          >Guardian Full Name / Guardian Mobile
                          Number</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <!-- Field Divider -->
                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="bluebird">mail</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title
                          >aliconnors@example.com</v-list-tile-title
                        >
                        <v-list-tile-sub-title
                          >Guardian Email</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <!-- Field Divider -->
                    <v-divider inset></v-divider>

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="bluebird">mdi-pill</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title
                          >Some medication is imported here</v-list-tile-title
                        >
                        <v-list-tile-sub-title
                          >Known Medications</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <!-- Field Divider -->
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="#FF1744">mdi-alert-decagram</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title
                          >Some Allergy goes here</v-list-tile-title
                        >
                        <v-list-tile-sub-title
                          >Known Phone</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <!-- Field Divider -->

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="#43A047">mdi-currency-usd</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title
                          >Tuition Paid: () Tuition Owed: ()</v-list-tile-title
                        >
                        <v-list-tile-sub-title>Balance</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <!-- Field Divider -->

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="bluebird">mdi-hospital-marker</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title
                          >Location goes here</v-list-tile-title
                        >
                        <v-list-tile-sub-title>Homeroom</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <!-- Field Divider -->

                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="#AEEA00">mdi-needle</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>Immuniziations</v-list-tile-title>
                        <v-list-tile-sub-title
                          >Click here to expand
                          immuniziations</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    <!-- Field Divider -->
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon color="bluebird">mdi-message-bulleted</v-icon>
                      </v-list-tile-action>

                      <v-list-tile-content>
                        <v-list-tile-title>Approved Contacts</v-list-tile-title>
                        <v-list-tile-sub-title
                          >Click here to expand</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </v-list-tile>
                    <!-- End of Fields -->
                  </v-list>
                </v-card>
              </v-flex>
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
