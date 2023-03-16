<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Zinzo Vue.js App" />
    <ParentComponent />
    <ParentComposition />

    <div class="users-list">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import ParentComponent from "../components/ParentComponent.vue";
import ParentComposition from "../components/ParentComposition.vue";
import UserCard from "../components/UserCard.vue";

const users = ref([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((user) => {
      users.value = user;
    });
});
</script>

<style scoped>
.users-list {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
