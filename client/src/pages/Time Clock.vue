<template>
<!-- Comment -->
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
      <v-layout
      justify-center
      align-center
    >
  <div>
    <v-data-table
      :headers="headers"
      :items="Times"
      :pagination.sync="pagination"
      :total-items="totalTimes"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.Dates }}</td>
        <td class="text-xs-right">{{ props.item.Times }}</td>
        <td class="text-xs-right">{{ props.item.Location }}</td>
        <td class="text-xs-right">{{ props.item.Status }}</td>
        <td class="text-xs-right">{{ props.item.Hours }}</td>
      </template>
    </v-data-table>
  </div>
      </v-layout>
  </v-container>
  </v-flex>
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
     data () {
      return {
        totalTimes: 0,
        Times: [],
        loading: true,
        pagination: {},
        headers: [
          {
            text: 'Staff Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Dates', value: 'Dates' },
          { text: 'Times', value: 'Times' },
          { text: 'Location', value: 'Location' },
          { text: 'Status (I,O)', value: 'Status' },
          { text: 'Hours', value: 'Hours' }
        ]
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.Times = data.items
              this.totalTimes = data.total
            })
        },
        deep: true
      }
    },
    mounted () {
      this.getDataFromApi()
        .then(data => {
          this.Times = data.items
          this.totalTimes = data.total
        })
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination

          let items = this.getTimes()
          const total = items.length

          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 1000)
        })
      },
      getTimes () {
        return [
          {
            name: 'Frozen Yogurt',
            Dates: 159,
            Times: 6.0,
            Location: 24,
            Status: 4.0,
            Hours: '1%'
          },
          {
            name: 'Ice cream sandwich',
            Dates: 237,
            Times: 9.0,
            Location: 37,
            Status: 4.3,
            Hours: '1%'
          },
          {
            name: 'Eclair',
            Dates: 262,
            Times: 16.0,
            Location: 23,
            Status: 6.0,
            Hours: '7%'
          },
          {
            name: 'Cupcake',
            Dates: 305,
            Times: 3.7,
            Location: 67,
            Status: 4.3,
            Hours: '8%'
          },
          {
            name: 'Gingerbread',
            Dates: 356,
            Times: 16.0,
            Location: 49,
            Status: 3.9,
            Hours: '16%'
          },
          {
            name: 'Jelly bean',
            Dates: 375,
            Times: 0.0,
            Location: 94,
            Status: 0.0,
            Hours: '0%'
          },
          {
            name: 'Lollipop',
            Dates: 392,
            Times: 0.2,
            Location: 98,
            Status: 0,
            Hours: '2%'
          },
          {
            name: 'Honeycomb',
            Dates: 408,
            Times: 3.2,
            Location: 87,
            Status: 6.5,
            Hours: '45%'
          },
          {
            name: 'Donut',
            Dates: 452,
            Times: 25.0,
            Location: 51,
            Status: 4.9,
            Hours: '22%'
          },
          {
            name: 'KitKat',
            Dates: 518,
            Times: 26.0,
            Location: 65,
            Status: 7,
            Hours: '6%'
          }
        ]
      }
    }
  }
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
