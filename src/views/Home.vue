<template>
  <div class="home">
    <div class="recipe" v-if="recipes">
      <h1>Our Recipes</h1>
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <div class="header">{{ recipe.name }} {{ recipe.image }}</div>
        <div class="actions">
          <button @click="onEditRecipe(recipe.id)">Edit</button>
        </div>
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
      recipe: {
        name: "",
        pers: "",
        ingredients: [],
      },
      newIngredient: {
        name: "",
        amount: "",
      },
    };
  },
  mounted() {
    // rezepte aufrufen
    this.getRecipes();
  },
  methods: {
    // rezept zum editieren und löschen aufrufen
    getRecipe(id) {
      this.recipe.id;
    },
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
    createRecipes() {
      axios
        .post(url, this.recipe)
        .then((response) => {
          console.log(response);
          this.recipes.push(response.data);
          console.log(this.recipes);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //? id, object
    onEditRecipe(id) {
      axios
        .put(url + id, this.recipe)
        .then((response) => {
          this.recipes.put(id);
        });
    },
  },
};
</script>
