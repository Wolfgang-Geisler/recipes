<template>
  <div class="recipe-form">
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <form v-if="!error && recipe" @submit.prevent="updateRecipe">
      <h1>Update Recipe</h1>
      <div class="form-control">
        <label>Name</label>
        <input v-model="recipe.name" type="text" />
      </div>
      <div class="form-control">
        <label>Persons</label>
        <input v-model="recipe.pers" type="number" />
      </div>
      <h2>Ingredients</h2>
      <div v-if="recipe.ingredients && recipe.ingredients.length">
        <div
          v-for="(ingredient, index) in recipe.ingredients"
          :key="ingredient.name"
        >
          {{ ingredient.name }} - {{ ingredient.amount }}
          <button @click.prevent="removeIngredient(index)">-</button>
        </div>
      </div>
      <div class="form-control">
        <label>Ingredient Name</label>
        <input v-model="newIngredient.name" type="text" />
      </div>
      <div class="form control">
        <label>Ingredient Amount</label>
        <input
          class="newIngriedientAmount"
          v-model="newIngredient.amount"
          type="text"
        />
      </div>
      <div>
        <button class="btn btn-secondary" @click.prevent="addIngredient">
          Add Ingredient
        </button>
      </div>

<div class="input-group mb-3">
  <input v-model="imgSearch" type="text" class="form-control" placeholder="Query" aria-label="Query">
  <button @click.prevent="searchImages" class="btn btn-outline-secondary">search</button>
</div>

<div class="mb-3">
  <div class="row">
    <div v-for="image in images" :key="image.id" class="col">
      <img :src="image.src.portrait" class="img-fluid" alt="...">
    </div>
  </div>
</div>

      <div type=""></div>
      <div class="form-control">
        <button class="btn btn-success" type="submit">Save</button>
        <button class="btn btn-danger" @click="cancel">Cancel</button>
        <button class="btn btn-primary" @click="deleteRecipe">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
import RecipeService from "../services/recipe-service";

export default {
  props: ["id"],
  data() {
    return {
      recipe: null,
      newIngredient: {
        name: "",
        amount: "",
      },
      error: null,
      imgSearch: "",
      images: null,
    };
  },
  mounted() {
    this.getRecipe();
  },
  methods: {
    searchImages() {
      PexelsService.getImagesPerQuery(this.imgSearch)
      .then((response) => {
        this.images = response.photos;
        console.log("images response: ", response);
      })
    },

    removeIngredient(index) {
      console.log(this.recipe.ingredients[index]);
      this.recipe.ingredients.splice(index, 1);
    },
    addIngredient() {
      this.recipe.ingredients.push({ ...this.newIngredient });
      console.log("New Ingredient: ", this.newIngredient);
      console.log("Ingredients: ", this.recipe.ingredients);
      this.newIngredient.name = "";
      this.newIngredient.amount = "";
    },

    cancel() {
      this.$router.push({ name: "Recipes" });
    },
    getRecipe() {
      RecipeService.getRecipe(this.id)
        .then((response) => {
          console.log(response.data);
          this.recipe = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },
    updateRecipe() {
      RecipeService.updateRecipe(this.id, this.recipe)
        .then(() => {
          this.$router.push({ name: "Recipes" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRecipe() {
      RecipeService.deleteRecipe(this.id)
        .then(() => {
          this.$router.push({ name: "Recipes" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.newIngriedientAmount {
  margin-bottom: 10px;
}
</style>
