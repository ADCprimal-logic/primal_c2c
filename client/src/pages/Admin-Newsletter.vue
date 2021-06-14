<!-- Comment -->
<template>
<!-- Comment -->
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
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search the newsletter!"
          single-line
          hide-details
        ></v-text-field>
        <material-card
          color="C2Cblue"
          title="News Letters"
          text="This table shows all previously posted newsletters."
        >
          <v-data-table
                  :headers="headers"
                  :items="currentNewsletter"
                  :expand="expand"
                  item-key="subject"
                  loading="true"
                  :search="search"
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
          <template v-slot:items="props">
          <tr @click="props.expanded = !props.expanded">
          <td class="text-xs-left">{{ props.item.subject }}</td>
          <td class="text-xs-left">{{ props.item.date_posted }}</td>
          <td class="text-xs-left">{{ props.item.time_posted }}</td>
        </tr>
        </template>
           <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
        </template>
        <template v-slot:expand="props">
        <v-responsive :aspect-ratio="16 / 9">
        
        <v-textarea
          outlined
          name="input-7-4"
          label="Subject"
          value="This is a test area for the content of the news letter."
          disabled
          class = "justify-center"
        ></v-textarea>
            
        
                
                    
                      <!-- Name over Image -->

              

                    <!-- End of Fields -->

                
         
         
        </v-responsive>
        </template>
          </v-data-table>
        </material-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>
<script>
const allNewsletters = `
query{
  allNewsletters{
    subject
    content
    date_posted
    time_posted
  }
}
`;

function graphql(query, variables = {}) {
  return fetch("http://localhost:3000/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function (result) {
    return result.json();
  });
}

import materialCard from "~/components/material/AppCard";

export default {
  layout: "admindashboard",
  components: {
    materialCard,
  },
  async asyncData() {
    const { data } = await graphql(allNewsletters);
    return {
      currentNewsletter: data.allNewsletters,
    };
  },
  data: () => ({
    search: "",
    headers: [
      { text: "Subject", value: "item.subject" },
      { text: "Date Posted", value: "item.date_posted" },
      { text: "Time Posted", value: "item.time_posted" },
    ],
  }),
};
</script>
