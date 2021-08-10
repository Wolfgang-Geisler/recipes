import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import CreateRecipe from "../views/Recipes/CreateRecipe.vue";
import Recipe from "../views/Recipes/Recipe.vue";
import RecipesList from "../views/Recipes/RecipesList.vue";
import EditRecipe from "../views/Recipes/EditRecipe.vue";

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
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/recipes",
    name: "RecipesList",
    component: RecipesList,
  },
  {
    path: "/recipes/create",
    name: "CreateRecipe",
    component: CreateRecipe,
  },
  {
    path: "/recipes/:id",
    name: "Recipe",
    component: Recipe,
    props: true,
  },
  {
    path: "/recipes/:id/edit",
    name: "EditRecipe",
    component: EditRecipe,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;