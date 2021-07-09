<template>
  <div v-if="recipe">
    <div class="header">
      <h1>{{ recipe.name }}</h1>
    </div>
    <div v-if="recipe.ingredients">
      <h2>Ingredients</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">{{ ingredient.name }} {{ingredient.amount}}</li>
      </ul>
    </div>
    <div class="footer">
      {{ recipe.image }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/recipes/";

export default {
  props: ["id"],
  data() {
    return {
      recipe: null,
    };
  },
  mounted() {
    // const id = this.$route.params.id
    this.getRecipe();
  },
  methods: {
    //get Recipe um zu bearbeiten
    getRecipe() {
      axios
        .get(url + this.id)
        .then((response) => {
          console.log(response.data);
          this.recipe = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
