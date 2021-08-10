<template>
  <div class="container">
    <div class="row">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="mb-4 col-xs-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card" style="width: 18rem;">
          <img
            v-if="recipe.image"
            :src="recipe.image.src.landscape"
            class="card-img-top"
            alt="card-img"
          />
          <div class="card-body">
            <h5 class="card-title">{{ recipe.name }}</h5>
            <p class="card-text">{{ recipe.description }}</p>
            <router-link
              :to="{ name: 'Recipe', params: { id: recipe.id } }"
              class="btn btn-primary"
              >Read More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeService from "../../services/recipe-service";

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
