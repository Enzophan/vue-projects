<template>
  <div>Tab C Content</div>
  <span>Keeping Dynamic Components Alive</span>
  <input type="text" v-model="name">
</template>

<script>
export default {
  name: "TabC",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
</style>