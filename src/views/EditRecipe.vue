<template>
  <div class="recipe-form">
    <form @submit.prevent="updateRecipe">
      <h1>Update Recipe</h1>
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
        <input v-model="ingredients" type="text" />
      </div>
      <div class="form control">
        <label>Ingredients Amount</label>
        <input v-model="ingredients" type="text" />
      </div>
      <div class="form-control">
        <button type="submit">Save</button>
        <button @click="onRedirectTo">Cancel</button>
        <button @click="onDeleteRecipe(id)">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/recipes/";

export default {
  props: ["id"],
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
  mounted() {
    this.getRecipe();
  },
  methods: {
    onRedirectTo() {
      this.$router.push({ name: "Recipes" });
    },
  //? id, object
    getRecipe() {
      axios
        .get(url + this.recipe)
        .then((response) => {
          console.log(response.data);
          this.recipe = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //? id, object
    updateRecipe() {
      axios
        .put(url + this.recipe)
        .then((response) => {
          this.$router.push({ name: "Recipes" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onDeleteRecipe(id) {
      axios.delete(url + id).then((response) => {
        this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
      });
    },
  },
};
</script>

<style></style>
