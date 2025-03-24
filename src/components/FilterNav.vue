<template>
    <div>
      <label>
        <input type="checkbox" value="true" @change="toggleFilter(true)" /> Disponible
      </label>
      <label>
        <input type="checkbox" value="false" @change="toggleFilter(false)" /> Emprunté
      </label>
      <input type="text" v-model="search" placeholder="Rechercher par titre ou auteur" @input="filterBooks" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: "" // Stocke la recherche
      };
    },
    props: {
      selectedFilters: Array,
    },
    methods: {
      toggleFilter(value) {
        const stringValue = String(value); // Assure que la comparaison est en string
        this.$emit('update-selected', stringValue);
      },
      filterBooks() {
        this.$emit('filter-books', this.search.trim()); // Émet la recherche à `LibraryView.vue`
      }
    }
  };
  </script>
  