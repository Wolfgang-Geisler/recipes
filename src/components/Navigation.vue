<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
           <router-link to="/recipes" class="nav-link" :class="{active : isActive}">Recipes</router-link>
        </li>
        <!--
        <li class="nav-item">
          <router-link :to="{name: 'Recipe', params: { id: recipe.id }}" to="/recipe/:id" class="nav-link" :class="{active : isActive}">Recipe</router-link>
        </li>
        -->
        <li class="nav-item">
           <router-link to="/recipe/create" class="nav-link" :class="{active : isActive}">Create Recipe</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" :class="{active : isActive}">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>