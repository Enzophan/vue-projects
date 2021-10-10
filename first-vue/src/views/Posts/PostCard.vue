<template>
  <div class="card">
    <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 3px solid #f4f4f4;
  border-radius: 4px;
  padding: 10px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.card a {
  text-decoration: none;
  color: #444;
}
</style>