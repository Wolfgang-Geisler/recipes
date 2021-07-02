import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Recipes from "../views/Recipes.vue";
import Recipe from "../views/Recipe.vue";
import About from "../views/About.vue";
import CreateRecipe from "../views/CreateRecipe.vue";
import EditRecipe from "../views/EditRecipe.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe,
    props: true,
  },
  {
    path: "/recipe/create",
    name: "CreateRecipe",
    component: CreateRecipe,
  },
  {
    path: "/recipe/:id/edit",
    name: "EditRecipe",
    component: EditRecipe,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
