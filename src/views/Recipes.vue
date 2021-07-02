<template>
  <div>
    <h1>Our Recipes</h1>
    <div class="recipe" v-if="recipes">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe">
        <router-link
          :to="{ name: 'Recipe', params: { id: recipe.id } }"
          class="header"
        >
          {{ recipe.name }}</router-link
        >
        <div class="footer">{{ recipe.image }}</div>
        <div class="actions">
          <router-link :to="{ name: 'EditRecipe', params: { id: recipe.id } }">
            <button>Edit</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/recipes/";
export default {
  data() {
    return {
      recipes: "",
      name: "",
      pers: "",
      ingredients: "",
    };
  },
  mounted() {
    this.getRecipes();
  },
  methods: {
    getRecipes() {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.recipes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
