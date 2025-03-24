<template>
    <div class="book">
      <h3 style="color:green;">{{ book.title }}</h3>
      <p>{{ book.resume.substring(0, 50) }}...</p>
      <router-link :to="'/book/' + book.id">...Afficher les Details du Livre</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      book: Object, // ✅ Post object comes from parent component
    },
  };
  </script>
  