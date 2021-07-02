<template>
  <div class="recipe-form">
    <form @submit.prevent="createRecipe">
        <h1>Create Recipe</h1>
      <div class="form-control">
        <label>Name</label>
        <input v-model="name" type="text" />
      </div>
      <div class="form-control">
        <label>Persons</label>
        <input v-model="pers" type="number" />
      </div>
      <div class="form-control">
        <label>Ingredients Name</label>
        <input v-model="ingredients.name" type="text" />
      </div>
      <div class="form-control">
        <label>Ingredients Amount</label>
        <input v-model="ingredients.amount" type="text" />
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
      recipes: "",
      name: "",
      pers: "",
      ingredients: "",
    };
  },
  methods: {
    createRecipe() {
      axios
        .post(url, {
          name: this.name,
          pers: this.pers,
          ingredients: this.ingredients,
        })
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
