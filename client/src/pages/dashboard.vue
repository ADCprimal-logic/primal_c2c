<template>

  <v-container
    fill-height
    fluid
    grid-list-xl
  >

    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-stats-card
          color="green"
          icon="mdi-alarm-plus"
          title="Students Clocked"
          value="0"
          small-value = "On time"
          sub-icon="mdi-calendar"
          sub-text="Today"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          color="orange"
          icon="mdi-alarm-bell"
          title="Late Students"
          value="0"
          small-value="Late "
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="View late students"
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
          color="red"
          icon="mdi-information-outline"
          title="Absent Students"
          value="0"
          small-value="Absent"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="View absent students"
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
      
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import materialCard from '~/components/material/AppCard'
  import materialChartCard from '~/components/material/AppChartCard'
  import materialStatsCard from '~/components/material/AppStatsCard'

  export default {
    layout: 'dashboard',
    middleware: 'authentication',
    components: {
      materialCard,
      materialChartCard,
      materialStatsCard,
    },
    data() {
      return {
        headers: [
          {
            sortable: false,
            text: 'Time Recieved',
            value: 'id'
          },
          {
            sortable: false,
            text: 'Sender',
            value: 'name'
          },
        ],
        items: [
          //
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
