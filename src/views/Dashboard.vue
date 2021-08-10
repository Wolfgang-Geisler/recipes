<template>
  <div class="container px-4 py-5">
    <Alert :message="error" type="danger" />
    <div class="btn-toolbar mb-4">
      <router-link :to="{ name: 'CreateRecipe' }" class="btn btn-primary"
        ><i class="fa fa-plus"></i> Add Recipe</router-link
      >
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Servings</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes" :key="recipe.id">
          <td>{{ recipe.id }}</td>
          <td>{{ recipe.name }}</td>
          <td>{{ recipe.servings }}</td>
          <td>
            <div class="btn-toolbar">
              <router-link
                :to="{ name: 'EditRecipe', params: { id: recipe.id } }"
                class="btn"
                ><i class="fa fa-edit"></i
              ></router-link>
              <button
                class="btn"
                data-toggle="modal"
                data-target="#deleteModal"
                @click="deleteRecipe(recipe.id)"
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "../components/Alert.vue";
import RecipeService from "../services/recipe-service";
export default {
  data() {
    return {
      recipes: [],
      error: null,
      recipeToDelete: null,
    };
  },
  components: {
    Alert,
  },
  mounted() {
    RecipeService.getRecipes()
      .then((response) => {
        this.recipes = response.data;
      })
      .catch((error) => {
        this.error = error.message;
      });
  },
  methods: {
    deleteRecipe(id) {
      RecipeService.deleteRecipe(id)
        .then((response) => {
          console.log(response);
          this.recipeToDelete = null;
          this.recipes = this.recipes.filter((recipe) => recipe.id != id);
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>