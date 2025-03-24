<template>
    <div class="book">
      <h3 style="color: green;">{{ book.titre }}</h3> <!-- Changed 'title' to 'titre' -->
      <p>{{ book.resume.substring(0, 50) }}...</p>
      <router-link :to="'/book/' + book.id">Afficher les détails</router-link>
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      book: Object, // ✅ Post object comes from parent component
    },
  };
  </script>
  