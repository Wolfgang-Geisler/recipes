import axios from 'axios';

const baseURL = "http://localhost:3000/recipes/";

const apiClient = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
});

export default {
  getRecipes() {
    return apiClient.get();
  },
  getRecipe(id) {
    return apiClient.get(id);
  },
  addRecipe(recipe) {
    return apiClient.post(recipe);
  },
  updateRecipe(id, recipe) {
    return apiClient.put(id, recipe);
  },
  deleteRecipe(id) {
    return apiClient.delete(id);
  }
}
