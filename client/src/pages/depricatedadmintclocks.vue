<!-- Comment -->
<template>
  <!-- Comment -->
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
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
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template v-slot:items="props">
              <tr @click="props.expanded = !props.expanded">
                <td>{{ props.item.full_name }}</td>
                <td class="text-xs-left">{{ props.item.gender }}</td>
                <td class="text-xs-left">
                  {{ props.item.medical_record.birthdate }}
                </td>
                <td class="text-xs-left">{{ props.item.room.name }}</td>
                <td class="text-xs-left">
                  {{ props.item.time_card.clockedIO }}
                </td>
              </tr>
            </template>
            <template v-slot:no-results>
              <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </template>
            <template v-slot:expand="expandedprops">
              <v-responsive :aspect-ratio="16 / 9">
                <v-card-text outlined shaped>
                  <v-layout row wrap align-right>
                    <v-container fill-height fluid grid-list-xl>
                      <v-layout justify-center align-center span wrap>
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
                            :headers="nestedtableHeaders"
                            :items="children"
                            class="elevation-50"
                          >
                            <!-- Constructor for visulation of data. These are the real headers of the chart. -->
                            <template v-slot:items="props">
                              <td>{{ props.item.name }}</td>
                              <td class="text-xs-right">
                                {{ props.item.Date }}
                              </td>
                              <td class="text-xs-right">
                                {{ props.item.Time }}
                              </td>
                              <td class="text-xs-right">
                                {{ props.item.time_card.clockedIO }}
                              </td>
                              <td class="text-xs-right">
                                {{ props.item.Hours }}
                              </td>
                              <td class="justify-center layout px-0">
                                <v-dialog v-model="dialog" max-width="500px">
                                  <template v-slot:activator="{ on }">
                                    <v-icon
                                      small
                                      class="mr-2"
                                      @click="editItem(props.item)"
                                      v-on="on"
                                    >
                                      edit
                                    </v-icon>
                                  </template>
                                  <v-card>
                                    <v-card-title>
                                      <span class="headline">{{
                                        formTitle
                                      }}</span>
                                    </v-card-title>
                                    <!-- End of edit field constructor -->
                                    <v-card-text>
                                      <v-container
                                        grid-list-md
                                        fill-height
                                        fluid
                                      >
                                        <v-layout wrap>
                                          <!-- Constructor data for editing fields -->
                                          <v-flex xs12 sm6 md4>
                                            <v-text-field
                                              v-model="editedItem.name"
                                              label="Time clocked In"
                                            ></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6 md4>
                                            <v-text-field
                                              v-model="editedItem.Date"
                                              label="Time Clocked Out"
                                            ></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6 md4>
                                            <v-text-field
                                              v-model="editedItem.Time"
                                              label="Time (g)"
                                            ></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6 md4>
                                            <v-text-field
                                              v-model="editedItem.Status"
                                              label="Status (g)"
                                            ></v-text-field>
                                          </v-flex>
                                          <v-flex xs12 sm6 md4>
                                            <v-text-field
                                              v-model="editedItem.Hours"
                                              label="Hours (g)"
                                            ></v-text-field>
                                          </v-flex>
                                        </v-layout>
                                      </v-container>
                                    </v-card-text>
                                    <!-- Below indicates action when user closes edit box -->
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        color="blue darken-1"
                                        @click="close"
                                        >Cancel</v-btn
                                      >
                                      <v-btn color="blue darken-1" @click="save"
                                        >Save</v-btn
                                      >
                                    </v-card-actions>
                                  </v-card>
                                </v-dialog>
                                <!-- Defines what is done when trash can is clicked-->
                                <v-icon small @click="deleteItem(props.item)">
                                  delete
                                </v-icon>
                              </td>
                            </template>
                            <!-- Defines what is done when there is no data in availble. Initialize refills the data from the server -->
                            <template v-slot:no-data>
                              <v-btn color="primary" @click="initialize"
                                >Reset</v-btn
                              >
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
    time_card{
      clockedIO
      check_in
      check_out
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
        text: "Student Time Card Data",
        align: "left",
        sortable: true,
        value: "full_name",
      },
      { text: "Gender(M/F)", value: "gender" },
      { text: "Date of Birth", value: "medical_record.birthdate" },
      { text: "Location", value: "_id" },
    ],
    nestedtableHeaders: [
      { text: "Date Recorded", value: "Date" },
      { text: "Time Recorded", value: "Time" },
      { text: "Status (In/Out)", value: "time_card.clockedIO" },
      { text: "Hours", value: "Hours" },
      { text: "Actions", value: "name", sortable: false },
    ],
    childTimecard: [],
    editedIndex: -1,
    editedItem: {
      name: "Child",
      Date: "01-02-2021",
      Time: "1200",
      Status: "In",
      Hours: 0,
    },
    defaultItem: {
      name: "",
      Date: 0,
      Time: 0,
      Status: 0,
      Hours: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.childTimecard = [
        {
          name: "Frozen Yogurt",
          Date: 159,
          Time: 6.0,
          Status: 24,
          Hours: 4.0,
        },
        {
          name: "Ice cream sandwich",
          Date: 237,
          Time: 9.0,
          Status: 37,
          Hours: 4.3,
        },
        {
          name: "Eclair",
          Date: 262,
          Time: 16.0,
          Status: 23,
          Hours: 6.0,
        },
        {
          name: "Cupcake",
          Date: 305,
          Time: 3.7,
          Status: 67,
          Hours: 4.3,
        },
        {
          name: "Gingerbread",
          Date: 356,
          Time: 16.0,
          Status: 49,
          Hours: 3.9,
        },
        {
          name: "Jelly bean",
          Date: 375,
          Time: 0.0,
          Status: 94,
          Hours: 0.0,
        },
        {
          name: "Lollipop",
          Date: 392,
          Time: 0.2,
          Status: 98,
          Hours: 0,
        },
        {
          name: "Honeycomb",
          Date: 408,
          Time: 3.2,
          Status: 87,
          Hours: 6.5,
        },
        {
          name: "Donut",
          Date: 452,
          Time: 25.0,
          Status: 51,
          Hours: 4.9,
        },
        {
          name: "KitKat",
          Date: 518,
          Time: 26.0,
          Status: 65,
          Hours: 7,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.childTimecard.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.childTimecard.indexOf(item);
      confirm("Are you sure you want to delete this time record?") &&
        this.childTimecard.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.childTimecard[this.editedIndex], this.editedItem);
      } else {
        this.childTimecard.push(this.editedItem);
      }
      this.close();
    },
  },
};
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
