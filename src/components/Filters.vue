<template>
  <section class="filters">
    <h2 class="filters__title">Filters</h2>
    <ul class="filters__filters">
      <li class="filters__filters__filter"><router-link to="/activity">Activity</router-link></li>
      <li class="filters__filters__filter"><router-link to="/recipes">Recipes</router-link></li>
      <li class="filters__filters__filter"><router-link to="/photos">Photos</router-link></li>
      <li class="filters__filters__filter"><router-link to="/reviews">Reviews</router-link></li>
      <li class="filters__filters__filter"><router-link to="/tweaks">Tweaks</router-link></li>
      <li class="filters__filters__filter"><router-link to="/questions">Questions</router-link></li>
      <li class="filters__filters__filter"><router-link to="/follows">Follows</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filters {
  &__filters {
    display: flex;

    &__filter {
      margin-right: 10px;
    }
  }
}
</style>
