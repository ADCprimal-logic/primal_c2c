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
          class = "justify-center"
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
            </v-layout>
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-layout
                justify-center
                wrap
                >
                <v-flex
                  xs12
                  sm4>
                  <a href="javascript:void( window.open( 'https://form.jotform.com/211745339022046', 'blank', 'scrollbars=yes, toolbar=no, width=1000, height=1000' ) ) "> 
                  <v-btn
                    block
                    color="bluebird"
                    @click="snack('top')"
                  >
                  Submit Request
                  </v-btn>
                  </a>
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
              <div>Opening form in a seperate window.</div>
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
    layout: 'frontdeskdashboard',
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

