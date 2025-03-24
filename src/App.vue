<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
  mounted() {
    console.log("✅ App.vue est monté !");
  }
};
</script>

<style>
/* Ajoute tes styles globaux ici */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}
</style>
