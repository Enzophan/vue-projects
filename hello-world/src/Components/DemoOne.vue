<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DemoOne",
  setup() {
    const name = ref("Kent");
    setTimeout(() => {
      name.value = "Mint";
    }, 5000);
    return {
      name,
    };
  },
};
</script>

<style scoped>
</style>