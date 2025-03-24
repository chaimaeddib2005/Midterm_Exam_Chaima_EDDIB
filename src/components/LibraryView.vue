<template>
    <div>
        <FilterNav :Selected="Selected" @update-selected="updateSelected" />
        <BooksList :books="filteredBooks" />
  </div>
</template>
<script>
import BooksList from './BooksList.vue';
import FilterNav from './FilterNav.vue';

export default({
  components: { BooksList, FilterNav },
    data() {
    return {
      books: [], // books list
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3003/livres");
      this.books = await response.json();
    } catch (error) {
      console.error("Erreur de chargement des livres:", error);
    }
  },
  computed: {
    filteredBooks() {
      if (!this.Selected || this.Selected.length === 0) {
        return this.books;
      }
      return this.books.filter((book) => this.Selected.includes(book.dispoinble));
    },
  },
});
</script>
