<template>
    <div>
      <h2 style="color:blue;margin-left:5vw;">À la une</h2>
      <div v-if="filteredBooks">
        <SingleBook style="border:1px solid black;margin:1vw;" v-for="book in filteredBooks" :key="book.id" :book="book" />
      </div>
      <p v-else>Aucun livre trouvé...</p>
    </div>
  </template>
  
  <script>
  import SingleBook from "./SingleBook.vue";
  
  export default {
    components: { SingleBook },
    props: ["filteredBooks"], //
   
  };
  </script>
  