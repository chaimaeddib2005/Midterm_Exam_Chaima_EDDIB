<template>
    <div v-if="book" class="book-details">
      <div class="details">
        <h2 class="title">{{ book.titre }}</h2>
        <p class="category">{{ book.categorie }}</p>
        <p class="author">{{ book.auteur }}</p>
        <p class="status">{{ bookStatus }}</p>
        <p class="resume">{{ book.resume }}</p>
        <p class="year">{{ book.annee }}</p>  
      </div>
      <div class="image-container">
        <img :src="book.image" :alt="book.titre" class="book-image" />
      </div>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      book: null,
    };
  },
  async mounted() {
    const bookId = this.$route.params.id;
    try {
      const response = await fetch("http://localhost:3003/livres");
      const books = await response.json();
      this.book = books.find(book => book.id == bookId);
    } catch (error) {
      console.error("Erreur de chargement des livres:", error);
    }
  },
  computed: {
    bookStatus() {
      return this.book?.disponible ? "Disponible" : "Emprunté";
    },
  },
};
</script>
  
<style scoped>
.book-details {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.details {
  flex: 1;
  padding: 1rem;
}

.title {
  text-align: center;
  color: #007bff;
  font-size: 1.8rem;
  font-weight: bold;
}

.category, .author, .status {
  font-size: 1.2rem;
  color: #333;
  margin: 0.5rem 0;
}

.resume {
  border: 1px solid #ddd;
  text-align: justify;
  font-size: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
}

.year {
  color: red;
  font-weight: bold;
  font-size: 1.2rem;
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
