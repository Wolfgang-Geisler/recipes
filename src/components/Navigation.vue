<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img src="../assets/logo_small.png" height="48" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="(navItem, index) in navigationItems"
            :key="index"
            class="nav-item"
          >
            <router-link
              class="nav-link"
              active-class="active"
              aria-current="page"
              :to="{ name: navItem.component }"
              >{{ navItem.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { name: "Recipes", component: "RecipesList" },
        { name: "Create Recipe", component: "CreateRecipe" },
        { name: "Dashboard", component: "Dashboard" },
      ],
    };
  },
};
</script>