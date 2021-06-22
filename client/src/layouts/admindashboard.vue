<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
  import coreFilter from '~/components/core/adminAppFilter';
  import coreToolbar from '~/components/core/adminAppToolbar';
  import coreDrawer from '~/components/core/adminAppDrawer';
  import coreView from '~/components/core/adminAppView';

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
