<template>
  <div class="recipe-form">
    <form @submit.prevent="createRecipe">
      <h1>Create Recipe</h1>
      <div class="form-control">
        <label>Name</label>
        <input v-model="recipe.name" type="text" />
      </div>
      <div class="form-control">
        <label>Persons</label>
        <input v-model="recipe.pers" type="number" />
      </div>
      <h2>Ingredients</h2>
      <div v-if="recipe.ingredients.length">
        <div
          v-for="(ingredient, index) in recipe.ingredients"
          :key="ingredient.name"
        >
          {{ ingredient.name }} - {{ ingredient.amount }}
          <button @click.prevent="removeIngredient(index)">-</button>
        </div>
      </div>
      <div class="form-control">
        <label>Ingredients Name</label>
        <input v-model="newIngredient.name" type="text" />
      </div>
      <div class="form-control">
        <label>Ingredients Amount</label>
        <input v-model="newIngredient.amount" type="text" />
      </div>
      <div>
        <button @click.prevent="addIngredient">Add Ingredient</button>
      </div>
      <div class="form-control">
        <button type="submit">Create Recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/recipes/";

export default {
  data() {
    return {
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
  methods: {
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

    createRecipe() {
      axios
        .post(url, this.recipe)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "Recipes" }); // Landet nach dem erfolgreichen erstellen wieder auf der Übersicht.
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
