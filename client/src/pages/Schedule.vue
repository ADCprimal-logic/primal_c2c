<template>
<!-- Comment -->
  <v-container>
      <div class='app'>
          <FullCalendar :options='calendarOptions' />
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
                        { title: 'nice event', start: new Date() }
                    ]
                },
            }
        }
    }
</script>
