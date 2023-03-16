<template>
  <main>
    <div id="nav">
      <router-link to="/">Go to Home</router-link> |
      <router-link to="/contact">Go to Contact</router-link> |
      <router-link :to="{ name: 'Dashboard' }">Go to Dashboard</router-link> |
      <!-- <router-link :to="{ name: 'Posts' }">Go to Posts</router-link> -->
    </div>
    <router-view :key="$route.path" />
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
