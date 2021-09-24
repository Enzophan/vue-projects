<template>
  <div>
    <h2>ComponentF</h2>
    <h4>Username: {{ username }}</h4>
  </div>
</template>

<script>
export default {
  name: "ComponentF",
  inject: ["username"],
};
</script>

<style scoped>
</style>