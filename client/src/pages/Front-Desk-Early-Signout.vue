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
      dark
      class
    >
      <template v-slot:items="props">
          <tr @click="props.expanded = !props.expanded">
              <td>{{ props.item.full_name }}</td>
              <td class="text-xs-left">{{ props.item.gender }}</td>
              <td class="text-xs-left" v-if="props.item.medical_record">
                  {{ props.item.medical_record.birthdate }}
              </td>
              <td class="text-xs-left" v-else>
                  n/a
              </td>
              <td class="text-xs-left" v-if="props.item.location">{{ props.item.location.name }}</td>
              <td class="text-xs-left" v-else>
                  n/a
              </td>
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
                <v-card color = 'C2Corange'>
                    <v-layout column fill-height>
                      <!-- Name over Image -->
                      <v-card-title class="justify-center C2Cblue--text pl-26 pt-26" row wrap align-right>
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
              <v-icon color="C2Corange">mdi-numeric</v-icon>
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
              <v-icon color="C2Corange">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="props.item.parent[0]">{{props.item.parent[0].mobile_phone}}</v-list-tile-title>
              <v-list-tile-sub-title v-if="props.item.parent[0]">Parent Name: {{props.item.parent[0].full_name}} <br/></v-list-tile-sub-title>
            
            </v-list-tile-content>
          </v-list-tile>

<!-- Field Divider -->



<!-- Field Divider -->
          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="C2Corange">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-if="props.item.parent[0]">{{props.item.parent[0].email}}</v-list-tile-title >
              <v-list-tile-sub-title>Parent Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->
          <v-divider inset></v-divider>
<!-- Field Divider --> 
            
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= 'C2Corange'>mdi-hospital-marker</v-icon>
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
              <v-icon color= 'C2Corange'>mdi-message-bulleted</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-if="props.item.approved_contact" 
              v-for="value in props.item.approved_contact">{{value.full_name}} <br/> Name</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>Approved Contact Full Name</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
            <v-list-tile @click="">
            <v-list-tile-action>
            <v-icon color= 'C2Corange'>mdi-phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="props.item.approved_contact" 
              v-for="value in props.item.approved_contact">{{value.phone}} </v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>Approved Contact Phone</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider -->   
            <v-list-tile @click="">
            <v-list-tile-action>
            <v-icon color= 'C2Corange'>mdi-account-switch</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="props.item.approved_contact" 
             v-for="value in props.item.approved_contact">{{value.relation}} </v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
              <v-list-tile-sub-title>Approved Contact Relation</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          
<!-- End of Fields -->
        </v-list>
        
      </v-card>
                  <a href="javascript:void( window.open( 'https://form.jotform.com/211794184029055', 'blank', 'scrollbars=yes, toolbar=no, width=1000, height=1000' ) ) "> 
                  <v-btn
                    block
                    color="C2Corange"
                    round
                    class = "C2Cblue--text"
                  >
                  Click here to sign out the student!
                  </v-btn>
                  </a>
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
  return fetch("http://34.234.191.221:3000/admin/api", {
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
      { text: "Location", value: "location.name" },
      { text: "Allergies", value: "medical_record.allergies" },
      { text: "Status (In/Out)", value: "enrollment_status" },
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
