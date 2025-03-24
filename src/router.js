import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/LibraryView.vue";
import BookDetails from "./components/BookDetails.vue";
const routes = [
  { path: "/", component: Home },

  { path: "/book/:id", component: BookDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
