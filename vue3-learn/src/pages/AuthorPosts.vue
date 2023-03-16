<template>
  <h3>Posts</h3>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="posts-list">
    <router-view></router-view>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'About.AuthorPosts.Post', params: { cid: post.id } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const posts = ref([]);
const isLoading = ref(true);
const route = useRoute();

onMounted(async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${route.params.id}`
  );
  posts.value = await data.json();
  isLoading.value = false;
});
</script>

<style scoped>
.posts-list {
  margin: auto;
  width: 50%;
  padding: 10px;
}

ul {
  list-style-type: none;
  counter-reset: li;
}
li {
  font-size: 2rem;
  text-align: left;
}

li:before {
  counter-increment: li;
  content: counter(li, decimal-leading-zero);
  color: red;
  margin-right: 0.25em;
}
</style>
