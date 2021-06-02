<template>
<!-- Comment -->
  <div>
    <v-toolbar color="#698390">
      <v-text color="#ffcf32">Recent News</v-text>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :expand="expand"
      item-key="subject"
    >
<template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.subject }}</td>
          <td class="text-xs-left">{{ props.item.dateposted }}</td>
          <td class="text-xs-left">{{ props.item.timeposted }}</td>
        </tr>
      </template>
      <template v-slot:expand="props">
        <v-card flat>
          <v-card-text>Peek-a-boo!</v-card-text>
        </v-card>
      </template>
    </v-data-table>
  </div>
</template>
  <!-- Closes out the page area and scripts begin next-->

 

<script>
import materialCard from '~/components/material/AppCard'
  export default {
    layout: 'frontdeskdashboard',
    components: {
      materialCard
    },
    data () {
      return {
        expand: false,
        headers: [
          {
            text: 'Subject',
            align: 'left',
            sortable: false,
            value: 'subject'
          },
          { text: 'Date Posted', value: 'dateposted' },
          { text: 'Time Posted', value: 'timeposted' },
        ],
        desserts: [
          {
            name: '',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
        ]
      }
    }
  }
</script>
