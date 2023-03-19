<template>
  <div>
    <h3>Profile</h3>
    <div v-if="isLoading">Loading...</div>
    <div class="user-details" v-else>
      <div class="image">
        <img class="avatar-user" :alt="userInfo.username" src="../assets/default.jpg" />
      </div>
      <div class="info">
        <h5>{{ userInfo.name }}</h5>
        <span>{{ userInfo.email }}</span>
        <span>{{ userInfo.phone }}</span>
        <span>{{ userInfo.website }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const userInfo = ref({});
const isLoading = ref(true);
const router = useRouter();

const route = useRoute();
onMounted(async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${route.params.id}`
  );
  if (data.status === 404) {
    router.push({ name: "NotFound" });
  }
  userInfo.value = await data.json();
  isLoading.value = false;
});
</script>

<style scoped>
.user-details {
  display: flex;
  justify-content: center;
  margin: 5px;
}
.user-details div {
  margin: 5px;
}
.avatar-user {
  max-width: 10rem;
  height: auto;
  border-radius: 50%;
}
.info {
  width: 20rem;
  display: inline-grid;
}
</style>
