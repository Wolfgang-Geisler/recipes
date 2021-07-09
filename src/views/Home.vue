<template>
  <div class="home">
    <div class="recipe" v-if="recipes">
      <h1>Our Recipes</h1>
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <div class="header">{{ recipe.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
//localhost:3000/recipes
const url = "http://localhost:3000/recipes/";

export default {
  name: "Home",
  components: {},
  views: {},
  data() {
    return {
      recipes: null,
    };
  },
  mounted() {
    // rezepte aufrufen
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
