<template>
  <div v-if="recipe">
    <div class="header">
      {{ recipe.name }}
    </div>
    <div class="footer">
      {{ recipe.image }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/recipes/";

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
    // const id = this.$route.params.id
    this.getRecipe(this.id);
  },
  methods: {
    //get Recipe um zu bearbeiten
    getRecipe(id) {
      axios
        .get(url + id)
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
