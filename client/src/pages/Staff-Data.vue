<!-- Comment -->
<template>
  <div>
    <v-toolbar color="#B0BEC5">
      <v-toolbar-title>Staff Data<br></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :expand="expand"
      item-key="name"
      loading = true
    >
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.Gender }}</td>
          <td class="text-xs-right">{{ props.item.DOB }}</td>
          <td class="text-xs-right">{{ props.item.Location }}</td>
          <td class="text-xs-right">{{ props.item.Allergies }}</td>
          <td class="text-xs-right">{{ props.item.Status }}</td>
        </tr>
      </template>
      <template v-slot:expand="props">
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="300px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Ali Conners</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(323) 555-6789</v-list-tile-title>
              <v-list-tile-sub-title>Work</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>


          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Work</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>1400 Main Street</v-list-tile-title>
              <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
        </v-card-text>
      </v-responsive>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import materialCard from '~/components/material/AppCard'

  export default {
    layout: 'dashboard',
    components: {
      materialCard
    },
    data: () => ({
    headers: [
      {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Gender', value: 'Gender' },
          { text: 'DOB (g)', value: 'DOB' },
          { text: 'Location (g)', value: 'Location' },
          { text: 'Allergies (g)', value: 'Allergies' },
          { text: 'Status (%)', value: 'Status' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            Gender: 159,
            DOB: 6.0,
            Location: 24,
            Allergies: 4.0,
            Status: '1%'
          },
          {
            name: 'Ice cream sandwich',
            Gender: 237,
            DOB: 9.0,
            Location: 37,
            Allergies: 4.3,
            Status: '1%'
          },
          {
            name: 'Eclair',
            Gender: 262,
            DOB: 16.0,
            Location: 23,
            Allergies: 6.0,
            Status: '7%'
          },
          {
            name: 'Cupcake',
            Gender: 305,
            DOB: 3.7,
            Location: 67,
            Allergies: 4.3,
            Status: '8%'
          },
          {
            name: 'Gingerbread',
            Gender: 356,
            DOB: 16.0,
            Location: 49,
            Allergies: 3.9,
            Status: '16%'
          },
          {
            name: 'Jelly bean',
            Gender: 375,
            DOB: 0.0,
            Location: 94,
            Allergies: 0.0,
            Status: '0%'
          },
          {
            name: 'Lollipop',
            Gender: 392,
            DOB: 0.2,
            Location: 98,
            Allergies: 0,
            Status: '2%'
          },
          {
            name: 'Honeycomb',
            Gender: 408,
            DOB: 3.2,
            Location: 87,
            Allergies: 6.5,
            Status: '45%'
          },
          {
            name: 'Donut',
            Gender: 452,
            DOB: 25.0,
            Location: 51,
            Allergies: 4.9,
            Status: '22%'
          },
          {
            name: 'KitKat',
            Gender: 518,
            DOB: 26.0,
            Location: 65,
            Allergies: 7,
            Status: '6%'
          }
        ],
  })
  }
</script>
