<!-- Comment -->
<template>
  <div>

    <!-- Start of Data Table-->

    <v-card-title>
      List of all children and students
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
      :items="staffData"
      :expand="expand"
      item-key="name"
      loading = true
      :search="search"
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.Gender }}</td>
          <td class="text-xs-left">{{ props.item.Location }}</td>
          <td class="text-xs-left">{{ props.item.Phone }}</td>
          <td class="text-xs-left">{{ props.item.Email }}</td>
          <td class="text-xs-left">{{ props.item.Status }}</td>
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
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
            <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="200px"
          rounded
            >
            <v-layout
              column
              fill-height
            >

            <v-spacer></v-spacer>
        <!-- Name over Image -->
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Ali Conners</div>
            </v-card-title>
          </v-layout>
        </v-img>
<!-- Defines the two lines in each data field -->
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              
            </v-list-tile-action>
<!-- A line of expanded data in the table -->
            <v-list-tile-content>
              <v-list-tile-title>Staff name goes here</v-list-tile-title>
              <v-list-tile-sub-title>Staff Full Name</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Start of a field -->
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Staff Mobile Number</v-list-tile-sub-title>
            
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(323) 555-6789</v-list-tile-title>
              <v-list-tile-sub-title>Staff Work Number</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->
          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Staff Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->
          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">mdi-pill</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Some medication is imported here</v-list-tile-title>
              <v-list-tile-sub-title>Known Medications</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider -->
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= #FF1744>mdi-alert-decagram</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Some Allergy goes here</v-list-tile-title>
              <v-list-tile-sub-title>Known Phone</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider --> 
            
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= #43A047>mdi-currency-usd</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Tuition Paid: () Tuition Owed: ()</v-list-tile-title>
              <v-list-tile-sub-title>Balance</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider --> 
            
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= 'bluebird'>mdi-hospital-marker</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Location goes here</v-list-tile-title>
              <v-list-tile-sub-title>Homeroom</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider --> 
            
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= #AEEA00>mdi-needle</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Immuniziations</v-list-tile-title>
              <v-list-tile-sub-title>Click here to expand immuniziations</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider -->   
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= 'bluebird'>mdi-message-bulleted</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Approved Contacts</v-list-tile-title>
              <v-list-tile-sub-title>Click here to expand</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
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
  import materialCard from '~/components/material/AppCard'

  export default {
    layout: 'frontdeskdashboard',
    components: {
      materialCard
    },
    data: () => ({
    search: '',
    headers: [
      {
            text: 'Staff Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Gender(M/F)', value: 'Gender',},
          { text: 'Location', value: 'Location' },
          { text: 'Phone Number', value: 'Phone' },
          { text: 'Email', value: 'Email' },
          { text: 'Status (In/Out)', value: 'Status' }
        ],
        staffData: [
          {
            name: 'Chris Cooper',
            Gender: 'Male',
            dateofBirth: '9/6/1992',
            Location: 'Homeroom',
            Phone: '843-324-1344',
            Email: 'cooperc2606@gmail.com',
            Status: 'Clocked In'
          },
           {
            name: 'Chris Cooper3',
            Gender: 'Male',
            dateofBirth: '9/6/1992',
            Location: 'Homeroom 6',
            Phone: '843-324-1344',
            Email: 'cooperc2606@gmail.com',
            Status: 'Clocked In'
          },
          {
            name: 'Chris Cooper2',
            Gender: 'Male',
            dateofBirth: '9/6/1992',
            Location: 'Homeroom 77',
            Phone: '843-324-1344',
            Email: 'cooperc2606@gmail.com',
            Status: 'Clocked In'
          },
        ],
  })
  }
</script>
