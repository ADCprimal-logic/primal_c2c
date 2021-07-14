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
    <v-img :src="image" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-list dense>
          <v-list-tile avatar to="/">
            <v-list-tile-avatar color="clear">
              <v-img :src="logo" height="58" width="58" />
            </v-list-tile-avatar>
            <v-list-tile-title class="title">
              <h4>Coast 2 Coast Kids</h4>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-divider />
        <v-list dense>
          <v-list-tile v-if="responsive"> </v-list-tile>
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
            <v-list-tile-title v-text="link.text" />
          </v-list-tile>
        </v-list>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      logo: "/vuetifylogo.png",
      links: [
        {
          to: "/Parents-Dashboard",
          icon: "mdi-view-dashboard",
          text: "Parents Dashoard",
          alt: "Dashboard",
        },
        {
          to: "/Parent-Schedule",
          icon: "mdi-application",
          text: "Schedule",
        },
        {
          to: "/Parents-Profile-Editor",
          icon: "mdi-account-edit",
          text: "Parent Profile",
        },
        {
          to: "/Parents-Approved-Contacts",
          icon: "mdi-account-edit",
          text: "Approved Contacts",
        },
        {
          to: "/Parents-Faculty-Contact",
          icon: "mdi-archive",
          text: "Faculty Contacts",
        },
        {
          to: "/Parents-Lunch-Portal",
          icon: "mdi-arrange-bring-to-front",
          text: "Lunch Portal",
        },
        {
          to: "/Parents-Child-Registration",
          icon: "mdi-clipboard-outline",
          text: "Child Re-Enrollment",
        },
        {
          to: "/slack-parent",
          icon: "mdi-slack",
          text: "Slack Channel",
        },
        //This is a secondary function for maps integrations. Future use.
        //{
        //to: '/maps',
        //icon: 'mdi-map-marker',
        //text: 'Maps'
        //},
      ],
      responsive: true,
    };
  },
  computed: {
    ...mapGetters({
      image: "app/getImage",
      color: "app/getColor",
      drawer: "app/getDrawer",
    }),

    inputValue: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    ...mapActions({
      setDrawer: "app/setDrawer",
    }),

    onResponsiveInverted() {
      this.responsive = window.innerWidth < 991;
    },
  },
};
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
    font: 200 &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }

    &__title {
      color: #ffffff;
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
  .font-weight-regular.font-italic {
    font: 200;
  }
}
</style>
