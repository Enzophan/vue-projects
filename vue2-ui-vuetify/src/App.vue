<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar.vue";

export default {
  components: {
    Snackbar,
  },
};
</script>
<style>
</style>
