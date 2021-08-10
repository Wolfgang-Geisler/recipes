import axios from "axios";

const baseURL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRecipes() {
    return apiClient.get("/recipes");
  },
  getRecipe(id) {
    return apiClient.get("/recipes/" + id);
  },
  addRecipe(recipe) {
    return apiClient.post("/recipes", recipe);
  },
  updateRecipe(id, recipe) {
    return apiClient.put("/recipes/" + id, recipe);
  },
  deleteRecipe(id) {
    return apiClient.delete("/recipes/" + id);
  },
};