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
import RecipeService from "../services/recipe-service";

export default {
  data() {
    return {
      recipes: null,
    };
  },
  mounted() {
    this.getRecipes();
  },
  methods: {
    getRecipes() {
      RecipeService.getRecipes()
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
