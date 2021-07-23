<template>
  <div class="home">
    <div class="recipe" v-if="recipes">
      <h1>Our Recipes</h1>
      <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <div class="header">{{ recipe.name }}</div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
