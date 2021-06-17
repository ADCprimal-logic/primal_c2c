<template>
<!-- Comment -->
  <v-container>
      <div class='app'>
          
          <iframe src="https://calendar.google.com/calendar/embed?src=billingsoftware%40c2ckids.com&ctz=America%2FNew_York" 
                  style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
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
    }
</script>
