<!-- Comment -->
<template>

  <div>

    <!-- Start of Data Table-->

    <v-card-title>
      This chart contains a list of all students. <br/> Find the correct student and clock them out. <br/> A notifcation will be sent to administrators and the guardian responsible for the child.
      <br/> ALWAYS VERIFY THE PIN ON THE ACCOUNT PRIOR TO RELEASING THE CHILD 
     <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search by any associated data"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="children"
      :expand="expand"
      item-key="full_name"
      loading="true"
      :search="search"
    >
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
      <!-- Expansion Data -->
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
      <template v-slot:expand="props">
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          <v-layout row wrap align-right>
              <v-flex xs12 sm6 offset-sm3>
                <v-card color = 'C2Cblue'>
                    <v-layout column fill-height>
                      <!-- Name over Image -->
                      <v-card-title class="white--text pl-26 pt-26" row wrap align-right>
                        {{props.item.first_name}}'s data is printed below.
                      </v-card-title>
                    </v-layout>
<!-- Defines the two lines in each data field -->
        <v-list two-line>
            <v-layout justify-center>
              <v-list-tile-action>
            </v-list-tile-action>
            </v-layout>
<!-- A line of expanded data in the table -->
            
               <v-layout justify-center align-center>
            </v-layout>
            
<!-- A line of expanded data in the table -->

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="red">mdi-numeric</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ props.item.pin_number }}</v-list-tile-title>
              <v-list-tile-sub-title>Childs PIN number</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Start of a field -->

            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{props.item.parent[0].mobile_phone}}</v-list-tile-title>
              <v-list-tile-sub-title>Parent Name: {{props.item.parent[0].full_name}} <br/></v-list-tile-sub-title>
            
            </v-list-tile-content>
          </v-list-tile>

<!-- Field Divider -->


              <!--This code block is for future proof to show two parents--!>
            <!--<v-list-tile-sub-title>2nd Parent Name: {{props.item.parent[1].full_name}} <br/></v-list-tile-sub-title>-->
            <!--<v-list-tile-title>2nd Parent Number: {{props.item.parent[1].mobile_phone}}</v-list-tile-title>-->
            <!-- Expansion Data -->



<!-- Field Divider -->
          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{props.item.parent[0].email}}</v-list-tile-title>
              <v-list-tile-sub-title>Parent Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->
          <v-divider inset></v-divider>
<!-- Field Divider --> 
            
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= 'bluebird'>mdi-hospital-marker</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{props.item.location.name}}</v-list-tile-title>
              <v-list-tile-sub-title>Location</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider --> 
            
          <v-divider inset></v-divider>
<!-- Field Divider -->   
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= 'bluebird'>mdi-message-bulleted</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title >{{props.item.approved_contact[0].full_name}} <br/> Name</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>Approved Contact Full Name</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            <v-list-tile @click="">
            <v-list-tile-action>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >{{props.item.approved_contact[0].phone}} </v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>Approved Contact Phone</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->   
            <v-list-tile @click="">
            <v-list-tile-action>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title >{{props.item.approved_contact[0].relation}} <br/> Name</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>Approved Contact Relation</v-list-tile-sub-title>
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
  </div>
</template>
<script>
const ALL_CHILD = `
query{
  allChildren{
    full_name
    first_name
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
    school_grade
    location{
      name
      program
      room{
        type
        name
      }
    }
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
  layout: "frontdeskdashboard",
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
