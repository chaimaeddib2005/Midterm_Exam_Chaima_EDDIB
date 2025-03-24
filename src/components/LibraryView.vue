<template>
  <div>
    <FilterNav 
      :selectedFilters="selectedFilters" 
      @update-selected="updateSelected"
      @filter-books="updateSearchQuery"
      class="filter-nav"
    />
    <BooksList :books="filteredBooks" />
  </div>
</template>

<script>
import BooksList from './BooksList.vue';
import FilterNav from './FilterNav.vue';

export default {
  components: { BooksList, FilterNav },
  data() {
    return {
      books: [],
      selectedFilters: [], // Stocke les filtres sélectionnés
      searchQuery: "", // Stocke le texte de recherche
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3003/livres");
      this.books = await response.json();
    } catch (error) {
      console.error("Erreur de chargement des livres:", error);
    }
    console.log(this.books);
  },
  computed: {
    filteredBooks() {
      let result = this.books;

      // Filtrer par disponibilité
      if (this.selectedFilters.length > 0) {
        result = result.filter(book => this.selectedFilters.includes(String(book.disponible)));
      }

      // Filtrer par recherche (titre ou auteur)
      if (this.searchQuery.trim() !== "") {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(book =>
          book.titre.toLowerCase().includes(query) || book.auteur.toLowerCase().includes(query)
        );
      }

      return result;
    }
  },
  methods: {
    updateSelected(newSelected) {
      if (this.selectedFilters.includes(newSelected)) {
        this.selectedFilters = this.selectedFilters.filter(f => f !== newSelected);
      } else {
        this.selectedFilters.push(newSelected);
      }
    },
    updateSearchQuery(query) {
      this.searchQuery = query; // Met à jour le texte de recherche
    }
  }
};
</script>

<style scoped>
.filter-nav {
  background-color:aqua;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-top: 1vw;
}
</style>
