<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
  import coreFilter from '~/components/core/loginAppFilter';
  import coreToolbar from '~/components/core/registrationAppToolbar';
  import coreDrawer from '~/components/core/loginAppDrawer';
  import coreView from '~/components/core/registrationAppView';

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
