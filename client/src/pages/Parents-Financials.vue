<template>
<!-- Comment -->
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="red"
          icon="mdi-cash"
          title="Balance Owed"
          value="$2,500"
          sub-icon="mdi-calendar"
          sub-text="Daily Update"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="C2Cblue"
          icon="mdi-content-copy"
          title="Last Payment"
          value="$352.50"
          sub-icon="mdi-clock"
          sub-icon-color="error"
          sub-text="Your account is current."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="mint"
          icon="mdi-clock"
          title="Next Scheduled Payment"
          value="6/29/2021"
          sub-icon="mdi-alert"
          sub-text="Update Autopay"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="info"
          icon="mdi-cash-remove"
          title="Returned Payments/Pending Payments"
          value="$0"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <material-card
          color="C2Cblue"
          title="Recent Payments Summary"
          text="This is a list of all payments made to C2CKids."
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
              <td class="text-xs-right">{{ item.AutoPay }}</td>
              <td class="text-xs-right">{{ item.city }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
        lg6
      >
        <material-card
          class="card-tabs"
          color="C2Corange">
          <v-flex
            slot="header"
          >
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="C2Cblue"
              dark
              class
            >
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >Tasks:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>
                Make One Time Payment
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>
                Update Autopay
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-chat-question-outline</v-icon>
                Request Special Invoices
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="green"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Payment form goes here
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[1]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Payment form here
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[2]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Payment form goes here
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import materialCard from '~/components/material/AppCard'
  import materialChartCard from '~/components/material/AppChartCard'
  import materialStatsCard from '~/components/material/AppStatsCard'

  export default {
    layout: 'parentsdashboard',
    middleware: 'authentication',
    components: {
      materialCard,
      materialChartCard,
      materialStatsCard
    },
    data() {
      return {
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id'
          },
          {
            sortable: false,
            text: 'Date/Time Posted',
            value: 'name'
          },
          {
            sortable: false,
            text: 'Payment Amount',
            value: 'salary',
            align: 'right'
          },
          {
            sortable: false,
            text: 'AutoPay',
            value: 'AutoPay',
            align: 'right'
          },
          {
            sortable: false,
            text: 'Posted By',
            value: 'city',
            align: 'right'
          }
        ],
        items: [
          {
            name: '06/20/2021',
            AutoPay: 'Scheduled',
            city: 'Carters',
            salary: '$325.10'
          },
          {
            name: '06/20/2021',
            AutoPay: 'Scheduled',
            city: 'Carters',
            salary: '$400'
          }, {
            name: '06/20/2021',
            AutoPay: 'Scheduled',
            city: 'Carters',
            salary: '$450.12'
          }, {
            name: '06/20/2021',
            AutoPay: 'None',
            city: 'Carters',
            salary: '$352.50'
          }, {
            name: '06/20/2021',
            AutoPay: 'None',
            city: 'Carters',
            salary: '$1200'
          }
        ],
        tabs: 0,
        list: {
          0: false,
          1: false,
          2: false
        }
      }
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      }
    },
    mounted() {
      this.$nextTick(() => {
        /*this.dailySalesChart.options = {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        };
        this.dataCompletedTasksChart.options = {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        };*/
      });
    }
  }
</script>
