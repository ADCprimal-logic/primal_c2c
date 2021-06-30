<template>
  <!-- Comment -->
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search for a student by any associated data."
          single-line
          hide-details
        ></v-text-field>
        <material-card
          color="C2Cblue"
          title="Child Check In System"
          text="Find a child and clock them in or out."
        >
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
            <!---Start of table-->
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template v-slot:items="props">
              <tr @click="props.expanded = !props.expanded">
                <td>{{ props.item.full_name }}</td>
                <td class="text-xs-left" v-if="props.item.location">
                  {{ props.item.location.name }}
                </td>
                <td class="text-xs-left" v-else>n/a</td>
                <td class="text-xs-left">{{ props.item.enrollment_status }}</td>
              </tr>
            </template>
            <template v-slot:no-results>
              <v-alert :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </template>
            <!---Start of nested table-->
            <template v-slot:expand="props">
              <v-responsive :aspect-ratio="16 / 9">
                <v-card-text>
                  <v-layout row wrap align-right>
                    <v-flex xs12 sm6 offset-sm3>
                      <v-card color="C2Cblue">
                        <v-layout column fill-height>
                          <!-- Name over Image -->
                          <v-card-title
                            class="
                              justify-center
                              align-center
                              white--text
                              text-center
                              pl-26
                              pt-26
                            "
                          >
                            {{ props.item.first_name }}'s time clock data is
                            printed below.
                          </v-card-title>
                        </v-layout>
                        <!-- Defines the two lines in each data field -->
                        <v-list two-line>
                          <v-list-tile>
                            <v-list-tile-action
                              ><v-icon color="C2Corange"
                                >mdi-account</v-icon
                              ></v-list-tile-action
                            >
                            <!-- A line of expanded data in the table -->

                            <v-list-tile-content>
                              <v-list-tile-title>{{
                                props.item.full_name
                              }}</v-list-tile-title>
                              <v-list-tile-sub-title
                                >Child's Full Name</v-list-tile-sub-title
                              >
                            </v-list-tile-content>
                          </v-list-tile>
                          <!-- Start of a field -->
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO7 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn7 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO7 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut7 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day7 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO1 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn1 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO1 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut1 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day1 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO2 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn2 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO2 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut2 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day2 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO3 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn3 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO3 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut3 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day3 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO4 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn4 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO4 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut4 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day4 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO5 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn5 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO5 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut5 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day5 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                            <v-list-tile-action>
                              <v-icon color="mint">mdi-alarm-multiple</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title
                                v-if="props.item.time_card.clockedIO6 === 'In'"
                              >
                                {{ props.item.time_card.time_PunchIn6 }} - In
                              </v-list-tile-title>
                              <v-list-tile-title
                                v-else-if="
                                  props.item.time_card.clockedIO6 === 'Out'
                                "
                                >{{ props.item.time_card.time_PunchOut6 }} -
                                Out</v-list-tile-title
                              >
                              <v-list-tile-title v-else>N/A</v-list-tile-title>
                              <v-list-tile-sub-title>
                                Time Punch - {{ props.item.time_card.day6 }}
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>

                          <!-- Field Divider -->
                          <v-btn
                            block
                            color="C2Cblue"
                            round
                            class="C2Corange--text"
                            @click="
                              saveClockIn(props.item.id);
                              props.expanded = !props.expanded;
                            "
                          >
                            Click here to sign the student in!
                          </v-btn>
                          <v-btn
                            block
                            color="C2Corange"
                            round
                            class="C2Cblue--text"
                            @click="
                              saveClockOut(props.item.id);
                              props.expanded = !props.expanded;
                            "
                          >
                            Click here to sign out the student!
                          </v-btn>

                          <!-- End of Fields -->
                        </v-list>
                      </v-card>
                    </v-flex>
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
            id
            full_name
            first_name
            location{
              name
              program
            }
            enrollment_status
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
  async asyncData() {
    const { data } = await graphql(ALL_CHILD);
    console.log(data.allChildren);
    return {
      children: data.allChildren,
    };
  },
  data: () => ({
    punchInQuery: null,
    punchOutQuery: null,
    timeStamp: dateString,
    dayStamp: currentDay,
    search: "",
    headers: [
      {
        text: "Student Name",
        align: "left",
        sortable: true,
        value: "full_name",
      },
      { text: "Location", value: "location.name" },
      { text: "Enrolled Status", value: "enrollment_status" },
    ],
  }),
  created() {
    this.initalize();
  },
  methods: {
    async initalize() {
      const { data } = await graphql(ALL_CHILD);
      this.children = data.allChildren;
      console.log("Init Child");
      console.log(this.children);
      console.log(this.dayStamp);
      switch (this.dayStamp) {
        case 0:
          var UPDATE_PUNCH_IN = `
            mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO7Type) {
                  updateChildTimecard(id: $id, data: {time_PunchIn7: $clockInSend, clockedIO7: $statusSelect}) {
                    id
                  }
                }
            `;
          var UPDATE_PUNCH_OUT = `
            mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO7Type) {
                  updateChildTimecard(id: $id, data: {time_PunchOut7: $clockOutSend, clockedIO7: $statusSelect}) {
                    id
                  }
                }
            `;

          break;
        case 1:
          var UPDATE_PUNCH_IN = `
            mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO1Type) {
                  updateChildTimecard(id: $id, data: {time_PunchIn1: $clockInSend, clockedIO1: $statusSelect}) {
                    id
                  }
                }
            `;
          var UPDATE_PUNCH_OUT = `
            mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO1Type) {
                  updateChildTimecard(id: $id, data: {time_PunchOut1: $clockOutSend, clockedIO1: $statusSelect}) {
                    id
                  }
                }
            `;

          break;
        case 2:
          var UPDATE_PUNCH_IN = `
           mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO2Type) {
                 updateChildTimecard(id: $id, data: {time_PunchIn2: $clockInSend, clockedIO2: $statusSelect}) {
                   id
                 }
               }
           `;
          var UPDATE_PUNCH_OUT = `
           mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO2Type) {
                 updateChildTimecard(id: $id, data: {time_PunchOut2: $clockOutSend, clockedIO2: $statusSelect}) {
                   id
                 }
               }
           `;

          break;
        case 3:
          var UPDATE_PUNCH_IN = `
           mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO3Type) {
                 updateChildTimecard(id: $id, data: {time_PunchIn3: $clockInSend, clockedIO3: $statusSelect}) {
                   id
                 }
               }
           `;
          var UPDATE_PUNCH_OUT = `
           mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO3Type) {
                 updateChildTimecard(id: $id, data: {time_PunchOut3: $clockOutSend, clockedIO3: $statusSelect}) {
                   id
                 }
               }
           `;

          break;
        case 4:
          var UPDATE_PUNCH_IN = `
            mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO4Type) {
                  updateChildTimecard(id: $id, data: {time_PunchIn4: $clockInSend, clockedIO4: $statusSelect}) {
                    id
                  }
                }
            `;
          var UPDATE_PUNCH_OUT = `
            mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO4Type) {
                  updateChildTimecard(id: $id, data: {time_PunchOut4: $clockOutSend, clockedIO4: $statusSelect}) {
                    id
                  }
                }
            `;

          break;
        case 5:
          var UPDATE_PUNCH_IN = `
            mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO5Type) {
                  updateChildTimecard(id: $id, data: {time_PunchIn5: $clockInSend, clockedIO5: $statusSelect}) {
                    id
                  }
                }
            `;
          var UPDATE_PUNCH_OUT = `
            mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO5Type) {
                  updateChildTimecard(id: $id, data: {time_PunchOut5: $clockOutSend, clockedIO5: $statusSelect}) {
                    id
                  }
                }
            `;

          break;
        case 6:
          var UPDATE_PUNCH_IN = `
           mutation timePunchIn($id: ID!, $clockInSend: DateTime, $statusSelect: ChildTimecardClockedIO6Type) {
                 updateChildTimecard(id: $id, data: {time_PunchIn6: $clockInSend, clockedIO6: $statusSelect}) {
                   id
                 }
               }
           `;
          var UPDATE_PUNCH_OUT = `
           mutation timePunchOut($id: ID!, $clockOutSend: DateTime, $statusSelect: ChildTimecardClockedIO6Type) {
                 updateChildTimecard(id: $id, data: {time_PunchOut6: $clockOutSend, clockedIO6: $statusSelect}) {
                   id
                 }
               }
           `;
          break;
        default:
          console.log("OK");
          break;
      }
      this.punchInQuery = UPDATE_PUNCH_IN;
      this.punchOutQuery = UPDATE_PUNCH_OUT;
    },

    async saveClockIn(id) {
      console.log(id);
      var parsedDate = new Date(this.timeStamp).toISOString();
      console.log(parsedDate);
      const { punchInData } = await graphql(this.punchInQuery, {
        id: id,
        clockInSend: parsedDate,
        statusSelect: "In",
      });
      this.timeStamp = makeDate();
      this.initalize();
    },

    async saveClockOut(id) {
      console.log(id);
      var parsedDate = new Date(this.timeStamp).toISOString();
      const { punchOutData } = await graphql(this.punchOutQuery, {
        id: id,
        clockOutSend: parsedDate,
        statusSelect: "Out",
      });
      this.timeStamp = makeDate();
      this.initalize();
    },
  },
};
</script>
<!--Comment-->
