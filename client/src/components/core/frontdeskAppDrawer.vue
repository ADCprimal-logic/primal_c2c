<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list dense>
          <v-list-tile avatar to="/">
          <v-list-tile-avatar
            color="clear"
          >
              <v-img
                :src="logo"
                height="50"
                width="50"
                
              />
            </v-list-tile-avatar>
            <v-list-tile-title class="title">
              <h4>Coast 2 Coast Kids</h4>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-divider/>
        <v-list dense>
          <v-list-tile
            v-if="responsive"
          >
          </v-list-tile>
          <v-list-tile
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :active-class="color"
            avatar
            class="v-list-item"
          >
            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              v-text="link.text"
            />
          </v-list-tile>
        </v-list>
      <v-layout class="justify-center align-center">
 <div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
 </div>
    <!-- Start of Data Table-->

      </v-layout>

      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        logo: '/vuetifylogo.png',
        links: [
          {
            to: '/Front-Desk-Dashboard',
            icon: 'mdi-view-dashboard',
            text: 'Front Desk Dashboard',
            alt: 'Front Desk Dashboard',
          },
          {
            to: '/Front-Desk-Early-Signout',
            icon: 'mdi-clipboard-outline',
            text: 'Early Sign Out'
          },
          {
            to: '/Front-Desk-Time-Clock',
            icon: 'mdi-alarm',
            text: 'Front Desk Time Clock'
          },
          {
            to: '/Front-Desk-Timeoff-Requests',
            icon: 'mdi-airplane-takeoff',
            text: 'Time Off Requests'
          },
          {
            to: '/Front-Desk-Schedule',
            icon: 'mdi-application',
            text: 'Schedule'
          },
          {
            to: '/Front-Desk-Student-Data',
            icon: 'mdi-archive',
            text: 'Student Data'
            },
            {
                to: '/Front-Desk-Lunch-Checkout',
                icon: 'mdi-clipboard-outline',
                text: 'Lunch Checkout'
            },
          {
            to: '/Front-Desk-Staff-Data',
            icon: 'mdi-apple',
            text: 'Staff Data'
          },
          {
            to: '/Front-Desk-Profile-Editor',
            icon: 'mdi-account',
            text: ' Update Front Desk Profile'
          },
          {
            to: '/icons',
            icon: 'mdi-chart-bubble',
            text: 'Icons'
          },
          //This is a secondary function for maps integrations. Future use.
          //{
            //to: '/maps',
            //icon: 'mdi-map-marker',
            //text: 'Maps'
          //},
        ],
        responsive: true
      }
    },
    computed: {
      ...mapGetters({
        image: 'app/getImage',
        color: 'app/getColor',
        drawer: 'app/getDrawer'
      }),


      inputValue: {
        get() {
          return this.drawer
        },
        set(val) {
          this.setDrawer(val)
        }
      }
    },
    mounted () {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },
    methods: {
      ...mapActions({
        setDrawer: 'app/setDrawer'
      }),

      onResponsiveInverted() {
        this.responsive = window.innerWidth < 991;
      }
    }
  }
</script>

<style lang="scss">
  #app-drawer {

    &.v-navigation-drawer .v-list {
      background: rgba(27, 27, 27, 0.4);
      padding: 0;
    }

    .v-divider {
      margin: 0;
    }

    .v-list__tile {
      border-radius: 4px;
      font: 200
      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }

      &__title {
        color: rgb(206, 114, 8);
        
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
    .font-weight-regular.font-italic{
      font:200
    }
  }
</style>
<style scoped>
.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background-color: rgb(209, 87, 16);
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 1.5s;
          animation-delay: 1.5s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}
</style>
