<template>
<!-- Comment -->
  <v-container
    fill-height
    fluid
  >

  </v-container>
  <!-- Closes out the page area and scripts begin next-->
</template>

 

<script>
import materialCard from '~/components/material/AppCard'
  export default {
    layout: 'frontdeskdashboard',
    components: {
      materialCard
    },
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Child Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Date', value: 'Date' },
        { text: 'Time Recorded', value: 'Time' },
        { text: 'Status (In/Out)', value: 'Status' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: 'Staff Name',
        Date: '01-02-2021',
        Time: '1200',
        Status: 'In',
        Hours: 0
      },
      defaultItem: {
        name: '',
        Date: 0,
        Time: 0,
        Status: 0,
        Hours: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            Date: 159,
            Time: 6.0,
            Status: 24,
            Hours: 4.0
          },
          {
            name: 'Ice cream sandwich',
            Date: 237,
            Time: 9.0,
            Status: 37,
            Hours: 4.3
          },
          {
            name: 'Eclair',
            Date: 262,
            Time: 16.0,
            Status: 23,
            Hours: 6.0
          },
          {
            name: 'Cupcake',
            Date: 305,
            Time: 3.7,
            Status: 67,
            Hours: 4.3
          },
          {
            name: 'Gingerbread',
            Date: 356,
            Time: 16.0,
            Status: 49,
            Hours: 3.9
          },
          {
            name: 'Jelly bean',
            Date: 375,
            Time: 0.0,
            Status: 94,
            Hours: 0.0
          },
          {
            name: 'Lollipop',
            Date: 392,
            Time: 0.2,
            Status: 98,
            Hours: 0
          },
          {
            name: 'Honeycomb',
            Date: 408,
            Time: 3.2,
            Status: 87,
            Hours: 6.5
          },
          {
            name: 'Donut',
            Date: 452,
            Time: 25.0,
            Status: 51,
            Hours: 4.9
          },
          {
            name: 'KitKat',
            Date: 518,
            Time: 26.0,
            Status: 65,
            Hours: 7
          }
        ]
      },
      
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this time record?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
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
