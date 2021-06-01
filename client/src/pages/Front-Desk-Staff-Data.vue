<!-- Comment -->
<template>
  <div>

    <!-- Start of Data Table-->

    <v-card-title>
      List of all staff members
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search for a staff member by name"
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
            <v-layout
              column
              fill-height
            >

            <v-spacer></v-spacer>
        <!-- Name over Image -->
            
          </v-layout>
        </v-img>
<!-- Defines the two lines in each data field -->
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
             <v-icon color="bluebird">mdi-account</v-icon> 
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
          <v-divider inset></v-divider>
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
        ],
  })
  }
</script>
