<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "DemoTwo",
  setup() {
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });

    setTimeout(() => {
      state.firstName = "Mint";
      state.lastName = "Phan";
    }, 5000);

    return toRefs(state)
  },
};
</script>

<style scoped>
</style>