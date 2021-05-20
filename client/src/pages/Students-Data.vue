<!-- Comment -->
<template>
  <div>
    <v-toolbar flat color="#00E5FF">
      <v-toolbar-title>Student Data</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="expand = !expand">
        {{ expand ? 'Close' : 'Keep' }} other rows
      </v-btn>
    </v-toolbar>
    <!-- Start of Data Table-->
    <v-data-table
      :headers="headers"
      :items="desserts"
      :expand="expand"
      item-key="name"
      loading = true
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.Gender }}</td>
          <td class="text-xs-left">{{ props.item.DOB }}</td>
          <td class="text-xs-left">{{ props.item.Location }}</td>
          <td class="text-xs-left">{{ props.item.Allergies }}</td>
          <td class="text-xs-left">{{ props.item.Status }}</td>
        </tr>
      </template>
      <!-- Expansion Data -->
      <template v-slot:expand="props">
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
            <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="200px"
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
              <v-list-tile-title>Parent/Guardian Name</v-list-tile-title>
              <v-list-tile-sub-title>Parent/Guardian Name</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
<!-- Start of a field -->
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Parent Mobile Number</v-list-tile-sub-title>
            
            </v-list-tile-content>
          </v-list-tile>
<!-- Field Divider -->
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="bluebird">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(323) 555-6789</v-list-tile-title>
              <v-list-tile-sub-title>Parent Work Number</v-list-tile-sub-title>
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
              <v-list-tile-sub-title>Parent Email</v-list-tile-sub-title>
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
              <v-list-tile-sub-title>Known Allergies</v-list-tile-sub-title>
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
              <v-list-tile-title>Click here to expand immuniziations</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
<!-- Field Divider --> 
            
            <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color= 'bluebird'>mdi-hospital-marker</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Special Notes</v-list-tile-title>
              <v-list-tile-sub-title>Child Notes Go Here</v-list-tile-sub-title>
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
<!-- Begin script here -->
<script>
  import materialCard from '~/components/material/AppCard'

  export default {
    layout: 'dashboard',
    components: {
      materialCard
    },
    data: () => ({
    headers: [
      {
            text: 'Student Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Gender(M/F)', value: 'Gender' },
          { text: 'DOB (M-D-Y)', value: 'DOB' },
          { text: 'Location', value: 'Location' },
          { text: 'Allergies (Y/N)', value: 'Allergies' },
          { text: 'Status (In/Out)', value: 'Status' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            Gender: 159,
            DOB: 6.0,
            Location: 24,
            Allergies: 4.0,
            Status: '1%'
          },
          {
            name: 'Ice cream sandwich',
            Gender: 237,
            DOB: 9.0,
            Location: 37,
            Allergies: 4.3,
            Status: '1%'
          },
          {
            name: 'Eclair',
            Gender: 262,
            DOB: 16.0,
            Location: 23,
            Allergies: 6.0,
            Status: '7%'
          },
          {
            name: 'Cupcake',
            Gender: 305,
            DOB: 3.7,
            Location: 67,
            Allergies: 4.3,
            Status: '8%'
          },
          {
            name: 'Gingerbread',
            Gender: 356,
            DOB: 16.0,
            Location: 49,
            Allergies: 3.9,
            Status: '16%'
          },
          {
            name: 'Jelly bean',
            Gender: 375,
            DOB: 0.0,
            Location: 94,
            Allergies: 0.0,
            Status: '0%'
          },
          {
            name: 'Lollipop',
            Gender: 392,
            DOB: 0.2,
            Location: 98,
            Allergies: 0,
            Status: '2%'
          },
          {
            name: 'Honeycomb',
            Gender: 408,
            DOB: 3.2,
            Location: 87,
            Allergies: 6.5,
            Status: '45%'
          },
          {
            name: 'Donut',
            Gender: 452,
            DOB: 25.0,
            Location: 51,
            Allergies: 4.9,
            Status: '22%'
          },
          {
            name: 'KitKat',
            Gender: 518,
            DOB: 26.0,
            Location: 65,
            Allergies: 7,
            Status: '6%'
          }
        ],
  })
  }
</script>
