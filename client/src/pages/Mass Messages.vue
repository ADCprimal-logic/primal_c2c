<template>
<!-- Comment -->
  <v-container
    fluid
    grid-list-xl
    fill-height>
      <v-layout justify-center
                align-center>
          <v-flex xs12>
              <material-card color="green">
                  <div slot="header">
                      <div class="title font-weight-light mb-2">Notifications</div>
                      <div class="category">
                          Handcrafted by us with
                          <v-icon size="17">
                              mdi-heart
                          </v-icon>
                      </div>
                  </div>

                  <v-card-text>
                      <v-layout row
                                wrap>
                          <v-flex md6
                                  sm12>
                              <h2 class="title font-weight-light mb-3">Notifications Style</h2>

                              <material-notification class="mb-3"
                                                     color="info">
                                  This is a plain notification
                              </material-notification>
                              <material-notification class="mb-3"
                                                     color="info"
                                                     dismissible>
                                  This is a notification with close button.
                              </material-notification>
                              <material-notification class="mb-3"
                                                     color="info"
                                                     dismissible
                                                     icon="mdi-bell-plus">

                                  This is a notification with close button and icon.
                              </material-notification>
                              <material-notification class="mb-3"
                                                     color="info"
                                                     dismissible
                                                     icon="mdi-bell-plus">

                                  This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
                              </material-notification>
                          </v-flex>

                          <v-flex md6
                                  sm12>
                              <h2 class="title font-weight-light">Notifcation States</h2>

                              <material-notification class="mb-3"
                                                     color="info"
                                                     dismissible>
                                  <strong>INFO</strong> - This is a regular notification made with `color="info"`
                              </material-notification>

                              <material-notification class="mb-3"
                                                     color="success"
                                                     dismissible>
                                  <strong>SUCCESS</strong> - This is a regular notification made with `color="success"`
                              </material-notification>

                              <material-notification class="mb-3"
                                                     color="warning"
                                                     dismissible>
                                  <strong>WARNING</strong> - This is a regular notification made with `color="warning"`
                              </material-notification>

                              <material-notification class="mb-3"
                                                     color="error"
                                                     dismissible>
                                  <strong>DANGER</strong> - This is a regular notification made with `color="error"`
                              </material-notification>

                              <material-notification class="mb-3"
                                                     color="purple"
                                                     dismissible>
                                  <strong>PRIMARY</strong> - This is a regular notification made with `color="purple"`
                              </material-notification>
                          </v-flex>
                      </v-layout>
                      <div class="text-xs-center">
                          <h2 class="title font-weight-light mb-2">Notification Places</h2>
                          <span class=" subheading font-weight-light grey--text">Click to view notifications</span>
                      </div>

                      <v-container grid-list-lg>
                          <v-layout justify-center
                                    row
                                    wrap>
                              <v-flex xs12
                                      sm4>
                                  <v-btn block
                                         color="success"
                                         @click="snack('top', 'left')">
                                      Top Left
                                  </v-btn>
                              </v-flex>
                              <v-flex xs12
                                      sm4>
                                  <v-btn block
                                         color="success"
                                         @click="snack('top')">
                                      Top Center
                                  </v-btn>
                              </v-flex>
                          </v-layout>
                          <v-layout justify-center
                                    row
                                    wrap>
                              <v-flex xs12
                                      sm4>
                                  <v-btn block
                                         color="success"
                                         @click="snack('top', 'right')">
                                      Top Right
                                  </v-btn>
                              </v-flex>
                              <v-flex xs12
                                      sm4>
                                  <v-btn block
                                         color="success"
                                         @click="snack('bottom', 'left')">
                                      Bottom Left
                                  </v-btn>
                              </v-flex>
                          </v-layout>
                          <v-layout justify-center
                                    row
                                    wrap>
                              <v-flex xs12
                                      sm4>
                                  <v-btn block
                                         color="success"
                                         @click="snack('bottom')">
                                      Bottom Center
                                  </v-btn>
                              </v-flex>
                              <v-flex xs12
                                      sm4>
                                  <v-btn block
                                         color="success"
                                         @click="snack('bottom', 'right')">
                                      Bottom Right
                                  </v-btn>
                              </v-flex>
                          </v-layout>
                      </v-container>

                      <v-snackbar :color="color"
                                  :bottom="bottom"
                                  :top="top"
                                  :left="left"
                                  :right="right"
                                  v-model="snackbar"
                                  dark>
                          <v-icon color="white"
                                  class="mr-3">
                              mdi-bell-plus
                          </v-icon>
                          <div>Welcome to <b>Vue Material Dashboard</b> - a beautiful freebie for every web developer.</div>
                          <v-icon size="16"
                                  @click="snackbar = false">
                              mdi-close-circle
                          </v-icon>
                      </v-snackbar>
                  </v-card-text>
              </material-card>

              <validation-observer ref="observer"
                                   v-slot="{ invalid }">
                  <form @submit.prevent="submit">
                      <validation-provider v-slot="{ errors }"
                                           name="Name"
                                           rules="required|max:10">
                          <v-text-field v-model="name"
                                        :counter="10"
                                        :error-messages="errors"
                                        label="Name"
                                        required></v-text-field>
                      </validation-provider>
                      <validation-provider v-slot="{ errors }"
                                           name="phoneNumber"
                                           :rules="{
          required: true,
          digits: 7,
          regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
        }">
                          <v-text-field v-model="phoneNumber"
                                        :counter="7"
                                        :error-messages="errors"
                                        label="Phone Number"
                                        required></v-text-field>
                      </validation-provider>
                      <validation-provider v-slot="{ errors }"
                                           name="email"
                                           rules="required|email">
                          <v-text-field v-model="email"
                                        :error-messages="errors"
                                        label="E-mail"
                                        required></v-text-field>
                      </validation-provider>
                      <validation-provider v-slot="{ errors }"
                                           name="select"
                                           rules="required">
                          <v-select v-model="select"
                                    :items="items"
                                    :error-messages="errors"
                                    label="Select"
                                    data-vv-name="select"
                                    required></v-select>
                      </validation-provider>
                      <validation-provider v-slot="{ errors }"
                                           rules="required"
                                           name="checkbox">
                          <v-checkbox v-model="checkbox"
                                      :error-messages="errors"
                                      value="1"
                                      label="Option"
                                      type="checkbox"
                                      required></v-checkbox>
                      </validation-provider>

                      <v-btn class="mr-4"
                             type="submit"
                             :disabled="invalid">
                          submit
                      </v-btn>
                      <v-btn @click="clear">
                          clear
                      </v-btn>
                  </form>
              </validation-observer>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import materialCard from '~/components/material/AppCard'
    import materialNotification from '~/components/material/AppNotification'
    import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
    setInteractionMode('eager')

    extend('digits', {
        ...digits,
        message: '{_field_} needs to be {length} digits. ({_value_})',
    })
    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })
    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })
    extend('regex', {
        ...regex,
        message: '{_field_} {_value_} does not match {regex}',
    })
    extend('email', {
        ...email,
        message: 'Email must be valid',
    })

  export default {
    layout: 'dashboard',
    components: {
      materialCard,
        materialNotification,
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
      color: null,
      colors: [
        'purple',
        'info',
        'success',
        'warning',
        'error'
      ],
      top: true,
      bottom: false,
      left: false,
      right: false,
        snackbar: false,
        name: '',
        phoneNumber: '',
        email: '',
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: null,
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
        },
        submit() {
            this.$refs.observer.validate()
        },
        clear() {
            this.name = ''
            this.phoneNumber = ''
            this.email = ''
            this.select = null
            this.checkbox = null
            this.$refs.observer.reset()
        },
    }
  }
</script>
