<template>
  <div>
    <button @click="getPosts">Load Post</button>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <div v-else v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostList",
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((err) => {
          console.log(err);
          this.errorMsg = `Error retrieving data: ${err.message}`;
        });
    },
  },
};
</script>

<style scoped>
</style>