<template>
  <div id="app">
    <h1 class="app-title">GK Activity Feed</h1>
    <div class="app-container">
      <Filters/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';

export default {
  components: {
    Filters
  },
  created() {
    this.updateActiveFilter();
  },
  watch: {
    $route: 'updateActiveFilter'
  },
  methods: {
    updateActiveFilter() {
      this.$store.commit('setActiveFilter', {
        filter: this.$route.name.toUpperCase()
      })
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/scss/global.scss";

.app-title {
  text-align: center;
}

.app-container {
  padding: 10px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
