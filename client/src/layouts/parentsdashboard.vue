<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
  import coreFilter from '~/components/core/parentsAppFilter';
  import coreToolbar from '~/components/core/parentsAppToolbar';
  import coreDrawer from '~/components/core/parentsAppDrawer';
  import coreView from '~/components/core/parentsAppView';

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
