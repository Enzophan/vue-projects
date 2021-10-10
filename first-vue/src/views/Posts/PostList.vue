<template>
  <div>
    <h2>Posts Listing</h2>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostService from "../../services/PostService.js";
import PostCard from "./PostCard.vue";

export default {
  name: "PostList",
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    PostService.getPosts()
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
};
</script>

<style scoped>
</style>