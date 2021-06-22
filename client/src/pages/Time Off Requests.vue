<template>
<!-- Comment -->
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >

        <material-card
          color="bluebird"
          title="Time off request forms"
          text="Use this form to submit a time off request!"
          icon="mdi-airport"
          
        >
        <br>
            <v-layout
            justify-center
            wrap
          >
          
        <v-icon
        size="40px"
        large
        center
        >
        mdi-airport
        </v-icon>
            </v-layout>
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Location"
                    
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Phone number"
                    
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                  <v-text-field
                    label="Address"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="City"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Country"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="Dates requested off"
                    value=""
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="Additional Information/Reason"
                    value=""
                  />
                </v-flex>
                <v-layout
                justify-center
                wrap
                >
                <v-flex
                  xs12
                  sm4>
                  <v-btn
                    block
                    color="bluebird"
                    @click="snack('top')"
                  >
                  Submit Request
                  </v-btn>
                </v-flex>
                </v-layout>
              </v-layout>
            </v-container>
            <!-- -->
            <v-snackbar
              :color="color"
              :bottom="bottom"
              :top="top"
              :left="left"
              :right="right"
              v-model="snackbar"
              dark
            >
              <v-icon
                color="white"
                class="mr-3"
              >
                mdi-airplane
              </v-icon>
              <div>Great job! You have successfully submitted a time off request.</div>
              <v-icon
                size="16"
                @click="snackbar = false"
              >
                mdi-close-circle
              </v-icon>
            </v-snackbar>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
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
    data: () => ({
      color: null,
      colors: [
        'bluebird',
      ],
      top: true,
      bottom: false,
      left: false,
      right: false,
      snackbar: false
    }),

    methods: {
      snack (...args) {
        this.top = false
        this.bottom = false
        this.left = false
        this.right = false

        for (const loc of args) {
          this[loc] = true
        }

        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]

        this.snackbar = true
      }
    }
  }
</script>

