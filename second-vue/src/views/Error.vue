<template>
  <div>
    <!-- <h2>Page not found</h2>-->

    <!-- https://undraw.co/search -->
    <img :src="pageNotFoundImg" alt="" />
    <p class="text-center">
      <router-link to="/">Click Here to home page</router-link>
    </p>
  </div>
</template>

<script>
import pageNotFoundImg from "@/assets/pageNotFound.svg";
export default {
  data: () => ({
    pageNotFoundImg,
  }),
};
</script>

<style>
</style>