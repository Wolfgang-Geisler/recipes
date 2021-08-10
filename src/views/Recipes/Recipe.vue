<template>
  <article v-if="recipe">
    <div class="hero">
      <img
        v-if="recipe.image"
        :src="recipe.image.src.landscape"
        :alt="recipe.name"
      />
      <div v-if="recipe.name" class="row px-4 py-5 my-5">
        <div class="text-bg col-lg-6 p-4 mx-auto">
          <h1>{{ recipe.name }}</h1>
        </div>
      </div>
    </div>
    <div class="container px-4 py-5">
      <Alert :message="error" type="danger" />
      <p>{{ recipe.description }}</p>

      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient.amount }} - {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import RecipeService from "../../services/recipe-service";
import Alert from "../../components/Alert.vue";
export default {
  props: ["id"],
  data() {
    return {
      recipe: null,
      error: null,
    };
  },
  components: {
    Alert,
  },
  mounted() {
    this.getRecipe();
  },
  methods: {
    getRecipe() {
      RecipeService.getRecipe(this.id)
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
