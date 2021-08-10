<template>
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
    <form @submit.prevent="handleSubmit">
      <Alert :message="error" type="danger" />
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-floating mb-3">
            <input
              v-model="recipe.name"
              type="text"
              class="form-control"
              id="name"
              placeholder="name"
            />
            <label for="name">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="recipe.servings"
              type="number"
              class="form-control"
              id="servings"
              placeholder="servings"
            />
            <label for="servings">Servings</label>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-floating">
            <textarea
              style="height: 132px"
              v-model="recipe.description"
              class="form-control"
              id="description"
            ></textarea>
            <label for="description">Description</label>
          </div>
        </div>
      </div>

      <div class="input-group mb-3">
        <input
          v-model="newIngredient.amount"
          type="text"
          class="form-control"
          placeholder="amount"
        />
        <input
          v-model="newIngredient.name"
          type="text"
          class="form-control"
          placeholder="ingredient"
        />
        <button
          class="btn btn-outline-secondary"
          @click.prevent="addIngredient"
        >
          <i class="fa fa-plus"></i>
        </button>
      </div>

      <div v-if="recipe.ingredients != null">
        <div
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
          class="input-group mb-3"
        >
          <input
            v-model="ingredient.amount"
            type="text"
            class="form-control"
            placeholder="amount"
          />
          <input
            v-model="ingredient.name"
            type="text"
            class="form-control"
            placeholder="ingredient"
          />
          <button
            class="btn btn-outline-secondary"
            @click.prevent="removeIngredient(index)"
          >
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>

      <div class="input-group mb-3">
        <input
          v-model="imageKeyword"
          type="text"
          class="form-control"
          placeholder="Search Images"
          aria-label="Search Images"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click.prevent="searchImages"
        >
          <i class="fa fa-search"></i>
        </button>
      </div>

      <div class="row mx-0 mb-2 image-selection" v-if="images.length">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="col-xs-6 col-sm-6 col-md-4 col-lg-3 p-0"
        >
          <input
            v-model="recipe.image"
            :value="image"
            type="radio"
            :id="image.id"
            name="image"
          />
          <label :for="image.id">
            <img
              class="img-fluid"
              :src="image.src.landscape"
              :alt="imageKeyword"
            />
          </label>
        </div>
      </div>

      <button v-if="editing" type="submit" class="btn btn-primary">
        Save Recipe
      </button>
      <button v-if="!editing" type="submit" class="btn btn-primary">
        Add Recipe
      </button>
      <button class="btn" @click.prevent="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
import RecipeService from "../services/recipe-service";
import ImageService from "../services/pexels-image-service";
import Alert from "./Alert.vue";
export default {
  data() {
    return {
      recipe: {},
      newIngredient: {
        amount: "",
        name: "",
      },
      currentImage: null,
      error: null,
      editing: false,
      imageKeyword: "",
      images: [],
    };
  },
  components: {
    Alert,
  },
  created() {
    if ("id" in this.$route.params) {
      this.editing = true;
      RecipeService.getRecipe(this.$route.params.id)
        .then((response) => {
          this.recipe = response.data;
          this.currentImage = response.data.image;
        })
        .catch((error) => {
          this.error = error.message;
        });
    }
  },
  methods: {
    addIngredient() {
      this.error = null;
      if (!this.recipe.ingredients) {
        this.recipe.ingredients = [];
      }
      try {
        this.recipe.ingredients.push({ ...this.newIngredient });
        this.newIngredient.amount = "";
        this.newIngredient.name = "";
      } catch (error) {
        this.error = error.message;
      }
    },
    removeIngredient(index) {
      try {
        this.error = null;
        this.recipe.ingredients.splice(index, 1);
      } catch (error) {
        this.error = error.message;
      }
    },
    createRecipe() {
      this.error = null;
      if (!this.recipe.ingredients || !(this.recipe.ingredients.length > 0)) {
        this.error = "There are no ingredients in your recipe";
        return;
      }
      RecipeService.addRecipe(this.recipe)
        .then(() => {
          this.$router.push({ name: "RecipesList" });
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    updateRecipe() {
      this.error = null;
      if (!this.recipe.ingredients || !(this.recipe.ingredients.length > 0)) {
        this.error = "There are no ingredients in your recipe";
        return;
      }
      RecipeService.updateRecipe(this.$route.params.id, this.recipe)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "RecipesList" });
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    searchImages() {
      if (this.imageKeyword) {
        ImageService.getImagesPerQuery(this.imageKeyword)
          .then((response) => {
            console.log(response);
            this.images = response.photos;
          })
          .catch((error) => {
            this.error = error.message;
          });
      }
    },
    cancel() {
      this.$router.push({ name: "RecipesList" });
    },
    handleSubmit() {
      console.log(this.recipe);
      if (this.editing) {
        this.updateRecipe();
        return;
      }
      this.createRecipe();
    },
  },
};
</script>

<style>
form > .btn {
  margin: 0.25rem 0.125rem;
}
.image-selection input[type="radio"] {
  position: absolute;
  left: -9999px;
}
input[type="radio"] + label {
  position: relative;
  transition: 500ms all;
}
input[type="radio"] + label::after {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  content: "";
  opacity: 0;
  border: 0rem solid #86b7fe;
  transition: 500ms all;
}
input[type="radio"]:checked + label::after {
  opacity: 0.8;
  border: 0.75rem solid #86b7fe;
}
</style>