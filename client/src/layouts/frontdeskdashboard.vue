<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
  import coreFilter from '~/components/core/frontdeskAppFilter';
  import coreToolbar from '~/components/core/frontdeskAppToolbar';
  import coreDrawer from '~/components/core/frontdeskAppDrawer';
  import coreView from '~/components/core/frontdeskAppView';

  export default {
    components: {
      coreFilter,
      coreToolbar,
      coreDrawer,
      coreView
    }
  }
</script>

<style lang="scss">
  /* Remove in 1.2 */
  .v-datatable thead th.column.sortable i {
    vertical-align: unset;
  }
</style>
