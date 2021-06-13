<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
  
    <v-btn
      slot="activator"
      class="elevation-0"
      color="C2Cblue"
      dark
      fab
      fixed
      style="top: 96px;"
      top
      title="Color Palette"
    >
      <v-icon>mdi-auto-fix</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">Set a new sidebar color!</div>

            <v-layout justify-center>
              <v-avatar
                v-for="c in colors"
                :key="c"
                :class="[c === color ? 'color-active color-' + c: 'color-' + c]"
                size="40"

                @click="setColor(c)"
              />
            </v-layout>
            <v-divider class="mt-3"/>
          </v-flex>
          <v-flex
            xs12
          >
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">Images</div>
          </v-flex>
          <v-flex
            v-for="img in images"
            :key="img"
            xs3
          >
            <v-img
              :class="[image === img ? 'image-active' : '']"
              :src="img"
              height="120"
              @click.native="setImage(img)"
            />
          </v-flex>
          <v-flex xs12>
            <v-btn
              href="https://www.c2ckids.com"
              target="_blank"
              class="C2Cblue--text"
              color="C2Corange"
              block
              rounded
            >
              www.c2ckids.com
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase">
              <div class="sidebar-filter">
                Visit our Facebook and Website!
              </div>

              <div>
                <v-btn
                  href="https://www.facebook.com/c2ckids"
                  color="indigo"
                  class="mr-2 v-btn-facebook"
                  fab
                  icon
                  small
                  round
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                 <v-btn
                  href="https://www.c2ckids.com"
                  color="mint"
                  fab
                  icon
                  small
                  round
                >
                  <v-icon>mdi-earth-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
  // Utilities
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      colors: [
        'primary',
        'info',
        'success',
        'warning',
        'danger'
      ],
      images: [
        'https://primal-c2c-images.s3.amazonaws.com/static/forest.jpg',
        'https://primal-c2c-images.s3.amazonaws.com/static/lake.jpg',
        'https://primal-c2c-images.s3.amazonaws.com/static/ridge.jpg',
        'https://primal-c2c-images.s3.amazonaws.com/static/bluetheme.jpg',
      ]
    }),

    computed: {
      ...mapGetters({
        image: 'app/getImage',
        color: 'app/getColor'
      })
    },

    methods: {
      ...mapActions({
        setImage: 'app/setImage',
        setColor: 'app/setColor'
      }),
    }
  }
</script>

<style lang="scss">
  .v-avatar,
  .v-responsive {
    cursor: pointer;
  }
</style>
