<template>
  <div class="home">
    <h3>Home Page</h3>
    <span>{{ mySpinner }}</span>
    <button @click="mySpinner.val = !mySpinner.val">Click Spin</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  inject: ["mySpinner"],
});
</script>

<style scoped>
</style>