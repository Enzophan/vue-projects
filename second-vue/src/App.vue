<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div class="container main">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
