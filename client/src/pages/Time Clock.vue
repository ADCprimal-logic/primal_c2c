<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
      </v-flex>
      </v-layout>
      <v-flex xs12>
        <material-card
          color="bluebird"
          title="Use the buttons below to clock in and out."
        >
        <v-layout
              justify-center
              align-center
            >
            <h2 class="font-weight-light mb-4">Clock In</h2>
              <v-btn 
              color="mint" 
              fab large dark

              @click="snack('top')"
               
              >
              <v-icon>alarm</v-icon>
            </v-btn>
          </v-layout>
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
              
              @click="snack('top')"
              > 
              <v-icon>mdi-alarm-off</v-icon>
            </v-btn>
                 </v-layout>
            
        </v-card-text>
        </v-layout>
        </material-card>
        <v-container
    fill-height
    fluid
    grid-list-xl
  >
  </v-container>
  <div>
    <v-toolbar flat color="mint">
      <v-toolbar-title>
        Recent Time Card Data
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="red" @click="initialize">Reset Table</v-btn>
          <v-btn color="bluebird" dark class="mb-2" v-on="on">Add new time Punch</v-btn>
          <v-btn color= "red" dark class="mb-2" v-on="on">Update Database</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Staff Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.timeRecord" label="Time"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.InOrOut" label="In or Out"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.hoursWorked" label="Hours Worked"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.timeRecord }}</td>
        <td class="text-xs-left">{{ props.item.InOrOut }}</td>
        <td class="text-xs-right">{{ props.item.hoursWorked }}</td>
        <td class=" flat layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
      </v-flex>
              
              <v-snackbar
              :color="color"
              :bottom="bottom"
              :top="top"
              :left="left"
              :right="right"
              v-model="snackbar"
              dark
            >

            
              <v-icon
                color="white"
                class="mr-3"
              >
                mdi-alarm
              </v-icon>
              <div>Great job! Your new clock time has been recorded successfully.</div>
              <v-icon
                size="16"
                @click="snackbar = false"
              >
                mdi-close-circle
              </v-icon>
            </v-snackbar>
              

            </v-container>
            
</template>


<script>
  import materialCard from '~/components/material/AppCard'
  import materialNotification from '~/components/material/AppNotification'

  export default {
    layout: 'dashboard',
    components: {
      materialCard,
      materialNotification
    },
    data: () => ({
      color: null,
      colors: [
        'bluebird',
      ],
      top: true,
      bottom: false,
      left: false,
      right: false,
      snackbar: false,
      headers: [
      {
        sortable: true,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: true,
        text: 'Time Recorded',
        value: 'country'
      },
      {
        sortable: true,
        text: 'Clocked In or Out',
        value: 'city'
      },
      {
        sortable: true,
        text: 'Hours Worked',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
 {
        },
        { text: 'timeRecord', value: 'timeRecord' },
        { text: 'InOrOut (g)', value: 'InOrOut' },
        { text: 'hoursWorked (g)', value: 'hoursWorked' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'name', sortable: false }
    ],
	desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        timeRecord: 0,
        InOrOut: 0,
        hoursWorked: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        timeRecord: 0,
        InOrOut: 0,
        hoursWorked: 0,
        protein: 0
      }
    }),
	
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add a time clock entry' : 'Edit Item'
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
      snack (...args) {
        this.top = false
        this.bottom = false
        this.left = false
        this.right = false

        for (const loc of args) {
          this[loc] = true
        }

        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]

        this.snackbar = true
      },
	  initialize () {
        this.desserts = [
          {
            name: 'Corn Pop',
            timeRecord: 159,
            InOrOut: 'IN',
            hoursWorked: 24,
          },
          {
            name: 'Corn Pop',
            timeRecord: 237,
            InOrOut: 'IN',
            hoursWorked: 37,
          },
          {
            name: 'You know the thing',
            timeRecord: 262,
            InOrOut: 'IN',
            hoursWorked: 23,
          },
          {
            name: 'hairylegsinpool',
            timeRecord: 305,
            InOrOut: 'IN',
            hoursWorked: 67,
          },
          {
            name: 'hidinbiden',
            timeRecord: 356,
            InOrOut: 'IN',
            hoursWorked: 49,
          },
          {
            name: 'Jelly bean',
            timeRecord: 375,
            InOrOut: 'IN',
            hoursWorked: 94,
          },
          {
            name: 'Lollipop',
            timeRecord: 392,
            InOrOut: 'IN',
            hoursWorked: 98,
          },
          {
            name: 'Honeycomb',
            timeRecord: 408,
            InOrOut: 'IN',
            hoursWorked: 87,
          },
          {
            name: 'Donut',
            timeRecord: 452,
            InOrOut: 25.0,
            hoursWorked: 51,
          },
          {
            name: 'KitKat',
            timeRecord: 518,
            InOrOut: 26.0,
            hoursWorked: 65,
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
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
