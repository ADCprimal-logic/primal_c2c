<template>
<!-- Comment -->
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
    <!-- Defines the layout paramenters of the page -->
      <v-flex xs12>
      </v-flex>
      </v-layout>
      <v-flex xs12>
        <material-card
          color="bluebird"
          title="Use the buttons below to clock in and out."
        >
      <!-- Creates the clock in button -->
      <v-layout
                  justify-center
                  align-center
            >
      <h2 class="font-weight-light mb-4">Clock In </h2><br>      
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn 
          color="mint" 
          fab large dark 
          v-on="on">
          <v-icon>mdi-alarm</v-icon>
          </v-btn>
          
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
      <!-- End of edit field constructor -->
          <v-card-text>
            <v-container grid-list-md fill-height fluid>
              <v-layout wrap>
                <!-- Constructor data for editing fields -->
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Staff Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Date" label="Date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Time" label="Time (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Status" label="Status (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Hours" label="Hours (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
<!-- Below indicates action when user closes edit box -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-layout>
        <!-- Creates the clock out button -->  
        <v-layout align-center>
          <v-card-text>
             <v-layout
                  justify-center
                  align-center
            >
             <h2 class="font-weight-light mb-4">Clock Out </h2><br>
            
              <v-btn 
              color="red" 
              fab large dark
              > 
              <v-icon>mdi-alarm-off</v-icon>
            </v-btn>
                 </v-layout>
        <!-- End of clock buttons -->    
        </v-card-text>
        </v-layout>
        </material-card>
        <!-- Start of the clockin data box on the page -->
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
  </v-flex>
  </v-container>
  <!-- Closes out the page area and scripts begin next-->
</template>

 

<script>
import materialCard from '~/components/material/AppCard'
  export default {
    layout: 'dashboard',
    components: {
      materialCard
    },
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Staff Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Date', value: 'Date' },
        { text: 'Time Recorded', value: 'Time' },
        { text: 'Status (In/Out)', value: 'Status' },
        { text: 'Hours', value: 'Hours' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: 'Staff Name',
        Date: '01-02-2021',
        Time: '1200',
        Status: 'In',
        Hours: 0
      },
      defaultItem: {
        name: '',
        Date: 0,
        Time: 0,
        Status: 0,
        Hours: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            Date: 159,
            Time: 6.0,
            Status: 24,
            Hours: 4.0
          },
          {
            name: 'Ice cream sandwich',
            Date: 237,
            Time: 9.0,
            Status: 37,
            Hours: 4.3
          },
          {
            name: 'Eclair',
            Date: 262,
            Time: 16.0,
            Status: 23,
            Hours: 6.0
          },
          {
            name: 'Cupcake',
            Date: 305,
            Time: 3.7,
            Status: 67,
            Hours: 4.3
          },
          {
            name: 'Gingerbread',
            Date: 356,
            Time: 16.0,
            Status: 49,
            Hours: 3.9
          },
          {
            name: 'Jelly bean',
            Date: 375,
            Time: 0.0,
            Status: 94,
            Hours: 0.0
          },
          {
            name: 'Lollipop',
            Date: 392,
            Time: 0.2,
            Status: 98,
            Hours: 0
          },
          {
            name: 'Honeycomb',
            Date: 408,
            Time: 3.2,
            Status: 87,
            Hours: 6.5
          },
          {
            name: 'Donut',
            Date: 452,
            Time: 25.0,
            Status: 51,
            Hours: 4.9
          },
          {
            name: 'KitKat',
            Date: 518,
            Time: 26.0,
            Status: 65,
            Hours: 7
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this time record?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #849fb9;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
