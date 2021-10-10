<template>
  <div>
    <h2>The post id is {{ id }}</h2>
    <div v-if="!loading">
      <h4>{{ post.title }}</h4>
    </div>
    <div v-else>
      <h4>Loading...</h4>
    </div>
  </div>
</template>

<script>
import PostService from "../../services/PostService.js";

export default {
  name: "PostDetails",
  props: ["id"],
  data() {
    return {
      loading: true,
      post: {
        title: String,
      },
    };
  },
  created() {
    PostService.getPost(this.id)
      .then((response) => {
        this.post = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
};
</script>

<style scoped>
</style>