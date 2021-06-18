<template>
  <!-- Comment -->
  <v-container fill-height fluid>
    <v-layout justify-center align-center>
      <!-- Defines the layout paramenters of the page -->
      <v-flex xs12> </v-flex>
    </v-layout>
    <v-flex xs12>
      <material-card
        color="bluebird"
        title="Use the buttons below to clock in and out."
      >
        <!-- Creates the clock in button -->
        <v-layout justify-center align-center>
          <h2 class="font-weight-light mb-4">Clock In</h2>
          <br />
          <v-dialog v-model="clockInDialog" max-width="500px">
            <template v-slot:activator="clockIn">
              <v-btn color="mint" fab large dark v-on="clockIn.on">
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
                      <v-text-field
                        v-model="defaultItem.day"
                        label="Day"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="defaultItem.ClockIn"
                        label="Clock In"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-select
                        v-model="defaultItem.Status"
                        :items="statusSelect"
                        label="Status (In/Out)"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <!-- Below indicates action when user closes edit box -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="closeClockIn"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" @click="saveClockIn">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
        <!-- Creates the clock out button -->
        <v-layout align-center>
          <v-card-text>
            <v-layout justify-center align-center>
              <h2 class="font-weight-light mb-4">Clock Out</h2>
              <br />
              <v-dialog v-model="clockOutDialog" max-width="500px">
                <template v-slot:activator="clockOut">
                  <v-btn color="red" fab large dark v-on="clockOut.on">
                    <v-icon>mdi-alarm-off</v-icon>
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
                          <v-text-field
                            v-model="defaultItem.day"
                            label="Day"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field
                            v-model="defaultItem.ClockOut"
                            :value="timeStamp"
                            label="Clock Out"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-select
                            v-model="defaultItem.Status"
                            :items="statusSelect"
                            label="Status (In/Out)"
                          ></v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <!-- Below indicates action when user closes edit box -->
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click="closeClockOut"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" @click="saveClockOut"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
            <!-- End of clock buttons -->
          </v-card-text>
        </v-layout>
      </material-card>
      <!-- Start of the clockin data box on the page -->
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
              :headers="headers"
              :items="childTimecard"
              class="elevation-1"
            >
              <!-- Constructor for visulation of data. These are the real headers of the chart. -->
              <template v-slot:items="props">
                <td>{{ props.item.day }}</td>
                <td class="text-xs-right">{{ props.item.ClockIn }}</td>
                <td class="text-xs-right">{{ props.item.ClockOut }}</td>
                <td class="text-xs-right">{{ props.item.Status }}</td>
                <td class="text-xs-right">{{ props.item.Hours }}</td>
                <td class="justify-center layout px-0">
                  <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                  </v-icon>
                </td>
              </template>
              <!-- Defines what is done when there is no data in availble. Initialize refills the data from the server -->
              <!--<template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>-->
            </v-data-table>
          </div>
        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
  <!-- Closes out the page area and scripts begin next-->
</template>

<script>
const GET_TODOS =
  `
query{
  allStaffMembers(where: {email_contains: "` +
  `"}){
    time_card{
      day1
      time_PunchIn1
      time_PunchOut1
      clockedIO1
      day2
      time_PunchIn2
      time_PunchOut2
      clockedIO2
      day3
      time_PunchIn3
      time_PunchOut3
      clockedIO3
      day4
      time_PunchIn4
      time_PunchOut4
      clockedIO4
      day5
      time_PunchIn5
      time_PunchOut5
      clockedIO5
      day6
      time_PunchIn6
      time_PunchOut6
      clockedIO6
      day7
      time_PunchIn7
      time_PunchOut7
      clockedIO7
      day8
      time_PunchIn8
      time_PunchOut8
      clockedIO8
      day9
      time_PunchIn9
      time_PunchOut9
      clockedIO9
      day10
      time_PunchIn10
      time_PunchOut10
      clockedIO10
      day11
      time_PunchIn11
      time_PunchOut11
      clockedIO11
      day12
      time_PunchIn12
      time_PunchOut12
      clockedIO12
      day13
      time_PunchIn13
      time_PunchOut13
      clockedIO13
      day14
      time_PunchIn14
      time_PunchOut14
      clockedIO14
    }
  }
}
`;
const UPDATE_PUNCH_IN = `
mutation upStaff($my_id: ID!, $firstname: String, $lastname: String, $myemail: String, $myphone: String) {
      updateStaffMember(id: $my_id, data: {first_name: $firstname, last_name: $lastname, email: $myemail, password: "Password123", phone: $myphone}) {
        id
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

function getUser(data) {
  return fetch("http://localhost:3000/api/auth/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  }).then(function (result) {
    //console.log(result);
    return result.json();
  });
}

const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();
const dateString =
  currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

import materialCard from "~/components/material/AppCard";
export default {
  layout: "dashboard",
  components: {
    materialCard,
  },
  data: () => ({
    clockOutDialog: false,
    clockInDialog: false,
    headers: [
      {
        text: "Day",
        align: "left",
        sortable: false,
        value: "day",
      },
      { text: "Clock In", value: "ClockIn" },
      { text: "Clock Out", value: "ClockOut" },
      { text: "Status (In/Out)", value: "Status" },
      { text: "Hours", value: "Hours" },
      { text: "Actions", value: "name", sortable: false },
    ],
    statusSelect: ["In", "Out"],
    timeStamp: dateString,
    childTimecard: [],
    allStaffTimeCards: [],
    editedIndex: -1,
    editedItem: {
      day: "",
      ClockIn: "",
      ClockOut: "",
      Status: "",
      Hours: 0,
    },
    defaultItem: {
      day: "",
      ClockIn: "",
      ClockOut: "",
      Status: "",
      Hours: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Time Punch" : "Edit Time Punch";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.updateStaff();
  },

  methods: {
    async updateStaff() {
      console.log(this.timeStamp);
      try {
        let responseUser = await getUser(responseLogin.accessToken);
        console.log(responseUser);
        await this.setUsername(responseUser.decoded.name);
      } catch (err) {
        console.log(err);
      }
      const { data } = await graphql(GET_TODOS);
      this.allStaffTimeCards = data.allStaffMembers[0].time_card;
      console.log(this.allStaffTimeCards);
      this.childTimecard = [
        {
          day: this.allStaffTimeCards.day1,
          ClockIn: this.allStaffTimeCards.time_PunchIn1,
          ClockOut: this.allStaffTimeCards.time_PunchOut1,
          Status: this.allStaffTimeCards.clockedIO1,
          Hours: 1.2,
        },
        {
          day: this.allStaffTimeCards.day2,
          ClockIn: this.allStaffTimeCards.time_PunchIn2,
          ClockOut: this.allStaffTimeCards.time_PunchOut2,
          Status: this.allStaffTimeCards.clockedIO2,
          Hours: 4.3,
        },
        {
          day: this.allStaffTimeCards.day3,
          ClockIn: this.allStaffTimeCards.time_PunchIn3,
          ClockOut: this.allStaffTimeCards.time_PunchOut3,
          Status: this.allStaffTimeCards.clockedIO3,
          Hours: 6.0,
        },
        {
          day: this.allStaffTimeCards.day4,
          ClockIn: this.allStaffTimeCards.time_PunchIn4,
          ClockOut: this.allStaffTimeCards.time_PunchOut4,
          Status: this.allStaffTimeCards.clockedIO4,
          Hours: 4.3,
        },
        {
          day: this.allStaffTimeCards.day5,
          ClockIn: this.allStaffTimeCards.time_PunchIn5,
          ClockOut: this.allStaffTimeCards.time_PunchOut5,
          Status: this.allStaffTimeCards.clockedIO5,
          Hours: 3.9,
        },
        {
          day: this.allStaffTimeCards.day6,
          ClockIn: this.allStaffTimeCards.time_PunchIn6,
          ClockOut: this.allStaffTimeCards.time_PunchOut6,
          Status: this.allStaffTimeCards.clockedIO6,
          Hours: 0.0,
        },
        {
          day: this.allStaffTimeCards.day7,
          ClockIn: this.allStaffTimeCards.time_PunchIn7,
          ClockOut: this.allStaffTimeCards.time_PunchOut7,
          Status: this.allStaffTimeCards.clockedIO7,
          Hours: 0,
        },
        {
          day: this.allStaffTimeCards.day8,
          ClockIn: this.allStaffTimeCards.time_PunchIn8,
          ClockOut: this.allStaffTimeCards.time_PunchOut8,
          Status: this.allStaffTimeCards.clockedIO8,
          Hours: 6.5,
        },
        {
          day: this.allStaffTimeCards.day9,
          ClockIn: this.allStaffTimeCards.time_PunchIn9,
          ClockOut: this.allStaffTimeCards.time_PunchOut9,
          Status: this.allStaffTimeCards.clockedIO9,
          Hours: 4.9,
        },
        {
          day: this.allStaffTimeCards.day10,
          ClockIn: this.allStaffTimeCards.time_PunchIn10,
          ClockOut: this.allStaffTimeCards.time_PunchOut10,
          Status: this.allStaffTimeCards.clockedIO10,
          Hours: 7,
        },
        {
          day: this.allStaffTimeCards.day11,
          ClockIn: this.allStaffTimeCards.time_PunchIn11,
          ClockOut: this.allStaffTimeCards.time_PunchOut11,
          Status: this.allStaffTimeCards.clockedIO11,
          Hours: 7,
        },
        {
          day: this.allStaffTimeCards.day12,
          ClockIn: this.allStaffTimeCards.time_PunchIn12,
          ClockOut: this.allStaffTimeCards.time_PunchOut12,
          Status: this.allStaffTimeCards.clockedIO12,
          Hours: 7,
        },
        {
          day: this.allStaffTimeCards.day13,
          ClockIn: this.allStaffTimeCards.time_PunchIn13,
          ClockOut: this.allStaffTimeCards.time_PunchOut13,
          Status: this.allStaffTimeCards.clockedIO13,
          Hours: 7,
        },
        {
          day: this.allStaffTimeCards.day14,
          ClockIn: this.allStaffTimeCards.time_PunchIn14,
          ClockOut: this.allStaffTimeCards.time_PunchOut14,
          Status: this.allStaffTimeCards.clockedIO14,
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

    closeClockIn() {
      this.clockInDialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    closeClockOut() {
      this.clockOutDialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    saveClockIn() {
      if (this.editedIndex > -1) {
        Object.assign(this.childTimecard[this.editedIndex], this.editedItem);
      } else {
        this.childTimecard.push(this.editedItem);
      }
      this.closeClockIn();
    },

    saveclockOut() {
      if (this.editedIndex > -1) {
        Object.assign(this.childTimecard[this.editedIndex], this.editedItem);
      } else {
        this.childTimecard.push(this.editedItem);
      }
      this.closeClockOut();
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
