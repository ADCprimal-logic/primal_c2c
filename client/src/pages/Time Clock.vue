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
              <v-btn color="mFloat" fab large dark v-on="clockIn.on">
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
                        v-model="editedItem.day"
                        label="Day"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="editedItem.ClockIn"
                        :value="(clockInSend = timeStamp)"
                        @input="clockInSend = $event"
                        label="Clock In"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field
                        v-model="editedItem.Notes"
                        @input="clockInNotes = $event"
                        label="Notes"
                      ></v-text-field>
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
                            v-model="editedItem.day"
                            label="Day"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field
                            v-model="editedItem.ClockOut"
                            :value="(clockOutSend = timeStamp)"
                            @input="clockOutSend = $event"
                            label="Clock Out"
                          ></v-text-field>
                          <v-text-field
                            v-model="editedItem.Notes"
                            @input="clockOutNotes = $event"
                            label="Notes"
                          ></v-text-field>
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
                <td class="text-xs-right">{{ props.item.Hours }}</td>
                <td class="text-xs-right">{{ props.item.Notes }}</td>
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
var staffEmail = "";
function graphql(query, variables = {}) {
  return fetch(process.env.baseUrl + "/admin/api", {
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
  return fetch(process.env.baseUrl + "/api/auth/user/", {
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
function makeDate() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();
  var dateString = currentYear + "-";
  if (currentMonth < 10) {
    dateString =
      dateString + "0" + (currentMonth + 1) + "-" + currentDayOfMonth;
  } else {
    dateString = dateString + (currentMonth + 1) + "-" + currentDayOfMonth;
  }
  const currentHour = currentDate.getHours();
  if (currentHour < 10) {
    dateString = dateString + "T" + "0" + currentHour + ":";
  } else {
    dateString = dateString + "T" + currentHour + ":";
  }
  const currentMinute = currentDate.getMinutes();
  if (currentMinute < 10) {
    dateString = dateString + "0" + currentMinute + ":";
  } else {
    dateString = dateString + currentMinute + ":";
  }
  const currentSecond = currentDate.getSeconds();
  if (currentSecond < 10) {
    dateString = dateString + "0" + currentSecond;
  } else {
    dateString = dateString + currentSecond;
  }
  return dateString;
}

const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();
var dateString = currentYear + "-";
if (currentMonth < 10) {
  dateString = dateString + "0" + (currentMonth + 1) + "-" + currentDayOfMonth;
} else {
  dateString = dateString + (currentMonth + 1) + "-" + currentDayOfMonth;
}
const currentHour = currentDate.getHours();
if (currentHour < 10) {
  dateString = dateString + "T" + "0" + currentHour + ":";
} else {
  dateString = dateString + "T" + currentHour + ":";
}
const currentMinute = currentDate.getMinutes();
if (currentMinute < 10) {
  dateString = dateString + "0" + currentMinute + ":";
} else {
  dateString = dateString + currentMinute + ":";
}
const currentSecond = currentDate.getSeconds();
if (currentSecond < 10) {
  dateString = dateString + "0" + currentSecond;
} else {
  dateString = dateString + currentSecond;
}

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
      { text: "Clock In", value: "ClockIn", sortable: false },
      { text: "Clock Out", value: "ClockOut", sortable: false },
      { text: "Hours", value: "Hours", sortable: false },
      { text: "Notes", value: "Notes", sortable: false },
    ],
    statusSelect: ["In", "Out"],
    timeStamp: dateString,
    dayStamp: currentDay,
    childTimecard: [],
    allStaffTimeCards: [],
    editedIndex: -1,
    punchInQuery: null,
    punchOutQuery: null,
    punchInSave: null,
    notesDefault: "X",
    editedItem: {
      day: "",
      ClockIn: "",
      ClockOut: "",
      Status: "",
      Hours: 0,
      Notes: "",
    },
    defaultItem: {
      day: "",
      ClockIn: "",
      ClockOut: "",
      Status: "",
      Hours: 0,
      Notes: "",
    },
    id: null,
    clockInSend: "",
    clockOutSend: "",
    clockInNotes: "",
    clockOutNotes: "",
  }),

  computed: {
    formTitle() {
      return "New Time Punch";
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
      console.log(this.dayStamp);
      try {
        var token = localStorage.getItem("auth_token");
        let responseUser = await getUser(token);
        //console.log(responseUser);
        staffEmail = responseUser.decoded.email;
        this.id = responseUser.decoded.id;
        //console.log(staffEmail);
        var GET_STAFF =
          `query{
        allStaffMembers(where: {email_contains: "` +
          staffEmail +
          `"}){
          time_card{
            day1
            day1_notes
            time_PunchIn1
            time_PunchOut1
            hours_worked1
            clockedIO1
            day2
            day2_notes
            time_PunchIn2
            time_PunchOut2
            hours_worked2
            clockedIO2
            day3
            day3_notes
            time_PunchIn3
            time_PunchOut3
            hours_worked3
            clockedIO3
            day4
            day4_notes
            time_PunchIn4
            time_PunchOut4
            hours_worked4
            clockedIO4
            day5
            day5_notes
            time_PunchIn5
            time_PunchOut5
            hours_worked5
            clockedIO5
            day6
            day6_notes
            time_PunchIn6
            time_PunchOut6
            hours_worked6
            clockedIO6
            day7
            day7_notes
            time_PunchIn7
            time_PunchOut7
            hours_worked7
            clockedIO7
            day8
            time_PunchIn8
            time_PunchOut8
            hours_worked8
            clockedIO8
            day9
            time_PunchIn9
            time_PunchOut9
            hours_worked9
            clockedIO9
            day10
            time_PunchIn10
            time_PunchOut10
            hours_worked10
            clockedIO10
            day11
            time_PunchIn11
            time_PunchOut11
            hours_worked11
            clockedIO11
            day12
            time_PunchIn12
            time_PunchOut12
            hours_worked12
            clockedIO12
            day13
            time_PunchIn13
            time_PunchOut13
            hours_worked13
            clockedIO13
            day14
            time_PunchIn14
            time_PunchOut14
            hours_worked14
            clockedIO14
          }
        }
      }
      `;
      } catch (err) {
        console.log(err);
      }
      //console.log(GET_STAFF);
      const { data } = await graphql(GET_STAFF);
      this.allStaffTimeCards = data.allStaffMembers[0].time_card;
      //console.log(this.allStaffTimeCards);
      switch (this.dayStamp) {
        case 0:
          this.defaultItem = {
            day: "Sunday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Sunday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
          mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO7Type, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchIn7: $clockInSend, clockedIO7: $statusSelect, day7_notes: $notes}) {
                  id
                }
              }
          `;
          var UPDATE_PUNCH_OUT = `
          mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO7Type, $hoursLogged: Float, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchOut7: $clockOutSend, clockedIO7: $statusSelect, hours_worked7: $hoursLogged, day7_notes: $notes}) {
                  id
                }
              }
          `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn7;
          break;
        case 1:
          this.defaultItem = {
            day: "Monday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Monday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
          mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO1Type, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchIn1: $clockInSend, clockedIO1: $statusSelect, day1_notes: $notes}) {
                  id
                }
              }
          `;
          var UPDATE_PUNCH_OUT = `
          mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO1Type, $hoursLogged: Float, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchOut1: $clockOutSend, clockedIO1: $statusSelect, hours_worked1: $hoursLogged, day1_notes: $notes}) {
                  id
                }
              }
          `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn1;
          break;
        case 2:
          this.defaultItem = {
            day: "Tuesday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Tuesday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
         mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO2Type, $notes: String) {
               updateStaffTimecard(id: $id, data: {time_PunchIn2: $clockInSend, clockedIO2: $statusSelect, day2_notes: $notes}) {
                 id
               }
             }
         `;
          var UPDATE_PUNCH_OUT = `
         mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO2Type, $hoursLogged: Float, $notes: String) {
               updateStaffTimecard(id: $id, data: {time_PunchOut2: $clockOutSend, clockedIO2: $statusSelect, hours_worked2: $hoursLogged, day2_notes: $notes}) {
                 id
               }
             }
         `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn2;
          break;
        case 3:
          this.defaultItem = {
            day: "Wednesday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Wednesday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
         mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO3Type, $notes: String) {
               updateStaffTimecard(id: $id, data: {time_PunchIn3: $clockInSend, clockedIO3: $statusSelect, day3_notes: $notes}) {
                 id
               }
             }
         `;
          var UPDATE_PUNCH_OUT = `
         mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO3Type, $hoursLogged: Float, $notes: String) {
               updateStaffTimecard(id: $id, data: {time_PunchOut3: $clockOutSend, clockedIO3: $statusSelect, hours_worked3: $hoursLogged, day3_notes: $notes}) {
                 id
               }
             }
         `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn3;
          break;
        case 4:
          this.defaultItem = {
            day: "Thursday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Thursday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
          mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO4Type, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchIn4: $clockInSend, clockedIO4: $statusSelect, day4_notes: $notes}) {
                  id
                }
              }
          `;
          var UPDATE_PUNCH_OUT = `
          mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO4Type, $hoursLogged: Float, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchOut4: $clockOutSend, clockedIO4: $statusSelect, hours_worked4: $hoursLogged, day4_notes: $notes}) {
                  id
                }
              }
          `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn4;
          break;
        case 5:
          this.defaultItem = {
            day: "Friday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Friday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
          mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO5Type, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchIn5: $clockInSend, clockedIO5: $statusSelect, day5_notes: $notes}) {
                  id
                }
              }
          `;
          var UPDATE_PUNCH_OUT = `
          mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO5Type, $hoursLogged: Float, $notes: String) {
                updateStaffTimecard(id: $id, data: {time_PunchOut5: $clockOutSend, clockedIO5: $statusSelect, hours_worked5: $hoursLogged, day5_notes: $notes}) {
                  id
                }
              }
          `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn5;
          break;
        case 6:
          this.defaultItem = {
            day: "Saturday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          this.editedItem = {
            day: "Saturday",
            ClockIn: this.timeStamp,
            ClockOut: this.timeStamp,
          };
          var UPDATE_PUNCH_IN = `
         mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: StaffTimecardClockedIO6Type, $notes: String) {
               updateStaffTimecard(id: $id, data: {time_PunchIn6: $clockInSend, clockedIO6: $statusSelect, day6_notes: $notes}) {
                 id
               }
             }
         `;
          var UPDATE_PUNCH_OUT = `
         mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: StaffTimecardClockedIO6Type, $hoursLogged: Float, $notes: String) {
               updateStaffTimecard(id: $id, data: {time_PunchOut6: $clockOutSend, clockedIO6: $statusSelect, hours_worked6: $hoursLogged, day6_notes: $notes}) {
                 id
               }
             }
         `;
          this.punchInSave = this.allStaffTimeCards.time_PunchIn6;
          break;
        default:
          console.log("OK");
          break;
      }
      this.punchInQuery = UPDATE_PUNCH_IN;
      this.punchOutQuery = UPDATE_PUNCH_OUT;
      this.childTimecard = [
        {
          day: this.allStaffTimeCards.day1,
          ClockIn: this.allStaffTimeCards.time_PunchIn1,
          ClockOut: this.allStaffTimeCards.time_PunchOut1,
          Status: this.allStaffTimeCards.clockedIO1,
          Hours: this.allStaffTimeCards.hours_worked1,
          Notes: this.allStaffTimeCards.day1_notes,
        },
        {
          day: this.allStaffTimeCards.day2,
          ClockIn: this.allStaffTimeCards.time_PunchIn2,
          ClockOut: this.allStaffTimeCards.time_PunchOut2,
          Status: this.allStaffTimeCards.clockedIO2,
          Hours: this.allStaffTimeCards.hours_worked2,
          Notes: this.allStaffTimeCards.day2_notes,
        },
        {
          day: this.allStaffTimeCards.day3,
          ClockIn: this.allStaffTimeCards.time_PunchIn3,
          ClockOut: this.allStaffTimeCards.time_PunchOut3,
          Status: this.allStaffTimeCards.clockedIO3,
          Hours: this.allStaffTimeCards.hours_worked3,
          Notes: this.allStaffTimeCards.day3_notes,
        },
        {
          day: this.allStaffTimeCards.day4,
          ClockIn: this.allStaffTimeCards.time_PunchIn4,
          ClockOut: this.allStaffTimeCards.time_PunchOut4,
          Status: this.allStaffTimeCards.clockedIO4,
          Hours: this.allStaffTimeCards.hours_worked4,
          Notes: this.allStaffTimeCards.day4_notes,
        },
        {
          day: this.allStaffTimeCards.day5,
          ClockIn: this.allStaffTimeCards.time_PunchIn5,
          ClockOut: this.allStaffTimeCards.time_PunchOut5,
          Status: this.allStaffTimeCards.clockedIO5,
          Hours: this.allStaffTimeCards.hours_worked5,
          Notes: this.allStaffTimeCards.day5_notes,
        },
        {
          day: this.allStaffTimeCards.day6,
          ClockIn: this.allStaffTimeCards.time_PunchIn6,
          ClockOut: this.allStaffTimeCards.time_PunchOut6,
          Status: this.allStaffTimeCards.clockedIO6,
          Hours: this.allStaffTimeCards.hours_worked6,
          Notes: this.allStaffTimeCards.day6_notes,
        },
        {
          day: this.allStaffTimeCards.day7,
          ClockIn: this.allStaffTimeCards.time_PunchIn7,
          ClockOut: this.allStaffTimeCards.time_PunchOut7,
          Status: this.allStaffTimeCards.clockedIO7,
          Hours: this.allStaffTimeCards.hours_worked7,
          Notes: this.allStaffTimeCards.day7_notes,
        },
        /*{
          day: this.allStaffTimeCards.day8,
          ClockIn: this.allStaffTimeCards.time_PunchIn8,
          ClockOut: this.allStaffTimeCards.time_PunchOut8,
          Status: this.allStaffTimeCards.clockedIO8,
          Hours: this.allStaffTimeCards.hours_worked8,
        },
        {
          day: this.allStaffTimeCards.day9,
          ClockIn: this.allStaffTimeCards.time_PunchIn9,
          ClockOut: this.allStaffTimeCards.time_PunchOut9,
          Status: this.allStaffTimeCards.clockedIO9,
          Hours: this.allStaffTimeCards.hours_worked9,
        },
        {
          day: this.allStaffTimeCards.day10,
          ClockIn: this.allStaffTimeCards.time_PunchIn10,
          ClockOut: this.allStaffTimeCards.time_PunchOut10,
          Status: this.allStaffTimeCards.clockedIO10,
          Hours: this.allStaffTimeCards.hours_worked10,
        },
        {
          day: this.allStaffTimeCards.day11,
          ClockIn: this.allStaffTimeCards.time_PunchIn11,
          ClockOut: this.allStaffTimeCards.time_PunchOut11,
          Status: this.allStaffTimeCards.clockedIO11,
          Hours: this.allStaffTimeCards.hours_worked11,
        },
        {
          day: this.allStaffTimeCards.day12,
          ClockIn: this.allStaffTimeCards.time_PunchIn12,
          ClockOut: this.allStaffTimeCards.time_PunchOut12,
          Status: this.allStaffTimeCards.clockedIO12,
          Hours: this.allStaffTimeCards.hours_worked12,
        },
        {
          day: this.allStaffTimeCards.day13,
          ClockIn: this.allStaffTimeCards.time_PunchIn13,
          ClockOut: this.allStaffTimeCards.time_PunchOut13,
          Status: this.allStaffTimeCards.clockedIO13,
          Hours: this.allStaffTimeCards.hours_worked13,
        },
        {
          day: this.allStaffTimeCards.day14,
          ClockIn: this.allStaffTimeCards.time_PunchIn14,
          ClockOut: this.allStaffTimeCards.time_PunchOut14,
          Status: this.allStaffTimeCards.clockedIO14,
          Hours: this.allStaffTimeCards.hours_worked14,
        },*/
      ];
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

    async saveClockIn() {
      var parsedDate = new Date(this.clockInSend).toISOString();
      console.log(parsedDate);
      //console.log(this.id);
      //console.log(this.punchInQuery);
      const { punchInData } = await graphql(this.punchInQuery, {
        id: this.id,
        clockInSend: parsedDate,
        notes: this.clockOutNotes,
        statusSelect: "In",
      });
      this.timeStamp = makeDate();
      this.updateStaff();
      this.closeClockIn();
    },

    async saveClockOut() {
      var parsedDate = new Date(this.clockOutSend).toISOString();
      //console.log(parsedDate);
      //console.log(this.id);
      //console.log(this.punchOutQuery);
      var timeOut = new Date(this.clockOutSend).getHours();
      //console.log(timeOut);
      var timeIn = new Date(this.punchInSave).getHours();
      //console.log(timeIn);
      var loggedHours = timeOut - timeIn;
      //console.log(loggedHours);
      console.log(this.notesDefault);
      const { punchOutData } = await graphql(this.punchOutQuery, {
        id: this.id,
        clockOutSend: parsedDate,
        statusSelect: "Out",
        notes: this.clockOutNotes,
        hoursLogged: loggedHours,
      });
      this.timeStamp = makeDate();
      this.updateStaff();
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
