<template>
    <div v-if="book" style="display:flex;flex-direction:row;">
        <div>
      <h2 style="text-align:center;color:blue;">{{ book.titre }}</h2>
      <p>{{ book.categorie }}</p>
        <p>{{ book.auteur }}</p>
        <p>{{ status }}</p>
      <p style="border:1px solid black;text-align:justify;font-size:2vw;margin:1vw;padding:1vw;">{{ post.resume }}</p>
        <p style="color:red;font-weight:bold;margin-left:2vw;margin-right:2vw;">{{book.annee }}</p>  
        </div>
        <div>
            <img :src="book.image" alt="book.title" style="width:100%;height:100%;"/>
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
        post: null,
      };
    },
    async mounted() {
      const bookId = this.$route.params.id;
      try {
        const response = await fetch("http://localhost:3003/livres"); // Fetch JSON data
        const books = await response.json();
        this.book = books.find(book => book.id == bookId); // Find the matching post
      } catch (error) {
        console.error("Erreur de chargement des livres:", error);
      }
    },
    computed: {
      status() {
        return this.book ? "Disponible" : "Emprunté";
      },
    },
  };
  </script>
  