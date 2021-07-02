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
        <input v-model="ingredients.name" type="text" />
      </div>  
      <div class="form control">
        <label>Ingredients Amount</label>
        <input v-model="ingredients.amount" type="text" />
      </div>
      <div class="form-control">
        <button type="submit">Save</button>
        <button @click="onRedirectTo">Cancel</button>
        <button @click="onDeleteRecipe(recipe.id)">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      recipes: "",
      name: "",
      pers: "",
      ingredients: "",
    };
  },
  mounted() {
    this.getRecipe();
  },
  methods: {
    onRedirectTo() {
      this.$router.push({ name: "Recipes" });
    },

    getRecipe() {
      axios
        .get(url + this.id)
        .then((response) => {
          console.log(response.data);
          this.name = response.data.name;
          this.pers = response.data.pers;
          this.ingredients = response.data.ingredients;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateRecipe() {
      axios
        .put(url + this.id, {
          name: this.name,
          pers: this.pers,
          ingredients: this.ingredients,
        })
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
