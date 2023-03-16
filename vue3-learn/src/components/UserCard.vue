<template>
  <router-link :to="{ name: 'About', params: { id: user.id, username: user.name } }">
    <div class="user-details">
      <div class="image">
        <img class="avatar-user" :alt="user.username" src="../assets/default.jpg" />
      </div>
      <div class="info">
        <h5>{{ user.name }}</h5>
        <span>{{ user.email }}</span>
        <span>{{ user.phone }}</span>
        <span>{{ user.website }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  user: Object,
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.user-details {
  display: flex;
  justify-content: center;

  border: 1px solid red;
  border-radius: 5px;
  margin: 5px;
}
.user-details div {
  margin: 5px;
}
.avatar-user {
  max-width: 10rem;
  height: auto;
}
.info {
  width: 20rem;
  display: inline-grid;
}
</style>
