<template>
  <div class="user">
    <h2>About Page</h2>
    <h2>User: {{ $route.params.id }}</h2>
    <span>Query: {{ query }}</span>
    <br />
    <span>props: {{ props }}</span>
    <div class="tabs">
      <router-link :to="{ name: 'About.AuthorProfile' }">Go to Profile</router-link>
      |
      <router-link :to="{ name: 'About.AuthorPosts' }">Go to Posts</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import {
  useRoute,
  // useRouter
} from "vue-router";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const query = ref({});
const route = useRoute();
// const router = useRouter();

onMounted(async () => {
  query.value = { id: route.params.id };
});
</script>
