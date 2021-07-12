<template>
<!-- Comment -->
  <v-container
    fill-height
    fill-width
    fluid
    style="flex-wrap: wrap;"
  >
  <v-layout
      justify-center
      wrap
      text-center
      fluid
    >
    <v-img src="https://primal-c2c-images.s3.amazonaws.com/static/campinthebox.png" fluid></v-img>
    </v-layout>
  <v-layout
      justify-center
      wrap
      fill-width
      fill-height
      color="#66848e"
      fluid
    >
     <v-toolbar
    color="C2Corange"
    dark
  >

  </v-toolbar>
    <v-layout justify-center wrap>
    <h2>Welcome to the church and organization registration page!</h2>
    <br/>
    </v-layout>
    <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Organization Name"
                    class="purple-input"
                  />
                </v-flex>
                <br/>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Organization Email Address"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    label="Organization Phone Number"
                    class="purple-input"
                  />
                </v-flex>
                
                <v-flex xs12 md6>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    label="Director First Name"
                    class="purple-input"
                  />
                </v-flex>
                
                <v-flex xs12 md6>
                  <v-text-field
                    label="Director Last Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="Organization Street Address and Zip Code"
                    hint="In the event the organization has multiple addresses, please separate them with a comma and select the respective states."
                  />
                </v-flex>
                      <v-flex xs12 sm6>
                <v-select
                  v-model="e6"
                  :items="states"
                  :menu-props="{ maxHeight: '400' }"
                  label="Select"
                  multiple
                  hint="Pick which state or states the organization resides in."
                  persistent-hint
                ></v-select>
              </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="mint"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
      </v-flex>
    </v-layout>
    
  </v-container>
  </v-layout>
  </v-container>
</template>

<script>

  export default {
    layout: 'registrationdashboard',

    data () {
      return {
        e6: 1,
        myStyle:{
            backgroundColor:"white" 
            },
        e6: [],
        e7: [],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    },
  }
</script>