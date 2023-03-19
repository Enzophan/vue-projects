<template>
  <div>
    <h1>Not Found</h1>
    <button @click="handleBackbtn">Back to Home</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleBackbtn = () => {
  router.push("/home");
};
</script>
