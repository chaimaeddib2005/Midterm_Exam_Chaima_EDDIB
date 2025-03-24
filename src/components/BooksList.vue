<template>
  <div class="books-container">
    <h2>~~Bibliothetique~~</h2>

    <div v-if="books && books.length > 0" class="grid-container">
      <SingleBook 
        v-for="book in books" 
        :key="book.id" 
        :book="book" 
        class="book-card"
      />
    </div>
    
    <p v-else class="no-books">Aucun livre trouvé...</p>
  </div>
</template>

<script>
import SingleBook from "./SingleBook.vue";

export default {
  components: { SingleBook },
  props: {
    books: {
      type: Array,
      required: true,
      default: () => [],
    }
  }
};
</script>

<style scoped>
.books-container {
  padding: 2vw;
}

h2 {
  color: blue;
  margin-left: 5vw;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Auto-fit 3 colonnes */
  gap: 1.5rem; /* Espacement entre les livres */
  padding: 2vw;
}

.book-card {
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.no-books {
  text-align: center;
  font-size: 1.2rem;
  color: gray;
}
</style>
