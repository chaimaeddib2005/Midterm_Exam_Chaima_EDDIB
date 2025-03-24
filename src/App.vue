<template>
  <div>
    <Library />
    <router-view></router-view>
  </div>
</template>

<script>
import Library from "./components/LibraryView.vue";
export default {
  components: {
    Library,
  },
};
</script>

<style scoped>
/* Ajout de styles de base */
</style>
