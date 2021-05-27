<template>
<!-- Comment -->
  <v-container>
      <div class='app'>
          <v-toolbar color="#B0BEC5">
              
          </v-toolbar>
          <FullCalendar :options='calendarOptions'/>
          <br />
          <FullCalendar :options="calendarOptions2"/>
      </div>
  </v-container>
</template>

<script>
    import materialCard from '~/components/material/AppCard'
    import materialChartCard from '~/components/material/AppChartCard'
    import materialStatsCard from '~/components/material/AppStatsCard'
    import FullCalendar from '@fullcalendar/vue'
    import interactionPlugin from '@fullcalendar/interaction'
    import dayGridPlugin from '@fullcalendar/daygrid';
    import timeGridPlugin from '@fullcalendar/timegrid'


    export default {
        layout: 'dashboard',
        middleware: 'authentication',
        components: {
            materialCard,
            materialChartCard,
            materialStatsCard,
            FullCalendar
        },
        data() {
            return {
                calendarOptions: {
                    plugins: [interactionPlugin, dayGridPlugin],
                    initialView: 'dayGridMonth',
                    nowIndicator: true,
                    editable: true,
                    initialEvents: [
                        { title: 'Class Party', start: new Date('2021-05-27T14:00:00') }
                    ],
                    events: [
                        {
                            title: 'Staff Shift',
                            startTime: '08:00',
                            endTime: '15:00',
                            startRecur: '2021-05-24',
                            endRecur: '2021-05-29',
                            allDay: false,
                            backgroundColor: 'orange',
                        },
                        {
                            title: 'Field Trip',
                            start: '2021-05-28T08:00:00',
                            end: '2021-05-28T17:00:00',
                            allDay: false,
                        }
                    ]
                },
                calendarOptions2: {
                    plugins: [interactionPlugin, timeGridPlugin],
                    initialView: 'timeGridWeek',
                    nowIndicator: true,
                    editable: true,
                    initialEvents: [
                        {
                            title: 'Class Party',
                            start: new Date('2021-05-27T15:00:00'),
                            end: new Date('2021-05-27T16:00:00'),
                        }
                    ],
                    events: [
                        {
                            title: 'Staff Shift',
                            startTime: '08:00',
                            endTime: '15:00',
                            allDay: false,
                            daysOfWeek: [1, 2, 3,4],
                            backgroundColor: 'orange',

                        },
                        {
                            title: 'Field Trip',
                            start: '2021-05-28T08:00:00',
                            end: '2021-05-28T17:00:00',
                            allDay: false,
                        }
                    ]
                },
            }
        }
    }
</script>
