<template>
<!-- Comment -->
<v-container>
<h2 justiy center>It is currently {time}.</h2>

  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="bluebird"
          title="Child Clock In Table"
          text="Use this to chart to see when your child was clocked in."
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
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
      >
      </v-flex>
    </v-layout>
  </v-container>
</v-container>
</template>

<script>
  import materialCard from '~/components/material/AppCard'

  export default {
    layout: 'parentsdashboard',
    components: {
      materialCard
    },
    data: () => ({
    headers: [
      {
        sortable: true,
        text: 'Student Name',
        value: 'name'
      },
      {
        sortable: true,
        text: 'Location',
        value: 'country'
      },
      {
        sortable: true,
        text: 'Time Stamp',
        value: 'city'
      },
      {
        sortable: true,
        text: 'Clock In/Clock Out',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
      {
        name: 'Dakota Rice',
        country: 'Null',
        city: 'Oud-Tunrhout',
        salary: '2307432'
      },
      {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }, {
        name: 'Mason Porter',
        country: 'Chile',
        city: 'Gloucester',
        salary: '$78,615'
      }
    ]
  })
  }
</script>
