<template>
  <div
    v-if="recipes"
    id="homeCarousel"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(recipe, index) in recipes"
        :key="index"
        type="button"
        data-bs-target="#homeCarousel"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(recipe, index) in recipes"
        :key="index"
        class="carousel-item"
      >
        <img
          :src="recipe.image.src.landscape"
          class="d-block w-100"
          :alt="recipe.name"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ recipe.name }}</h5>
          <p>{{ recipe.description }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#homeCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#homeCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div
    v-if="recipes"
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          :src="recipes[0].image.src.landscape"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          :src="recipes[0].image.src.landscape"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          :src="recipes[0].image.src.landscape"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import PexelsImageService from "../services/pexels-image-service";
import RecipeService from "../services/recipe-service";

export default {
  name: "Home",
  components: {},
  views: {},
  data() {
    return {
      recipes: null,
      photos: null,
      error: null,
    };
  },
  mounted() {
    this.getRecipes();
    this.getPhotos();
  },
  methods: {
    getRecipes() {
      RecipeService.getRecipes()
        .then((response) => {
          console.log(response.data);
          this.recipes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPhotos() {
      PexelsImageService.getPhotos()
        .then((response) => {
          console.log(response.data);
          this.photos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
