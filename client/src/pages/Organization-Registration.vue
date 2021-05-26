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
      fill-width
      text-center
      fluid
      fill-height
    >
    <v-img src="https://primal-c2c-images.s3.amazonaws.com/static/campinthebox.png"></v-img>
    </v-layout>
  <v-layout
      justify-center
      wrap
      fill-width
      fill-height
      color="#66848e"
      fluid
    >
    <h2>Welcome to the organization registration page!</h2>
    <v-layout justify-center wrap>
    <h3> Use the forms below to sign up for services.</h3><br>
    </v-layout>
    <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="mint"
          title="Edit Staff Profile"
          text="Use this page to update your contact, personal information and system avatar."
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Organization Name"
                    class="mint-input"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Email Address"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    label="First Name"
                    class="purple-input"

                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field

                    label="Last Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field

                    label="Country"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
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
        </material-card>
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
            }
      }
    },
  }
</script>