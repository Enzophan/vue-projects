<template>
  <div>
    <h3>Child Component C</h3>
    <h4>Username: {{ userName }}</h4>
    <h4>Composition Username: {{ childUserName }}</h4>
    <h4>Composition Count: {{ childCount }}</h4>
    <h4>Composition Hero: {{ firstName }} {{ lastName }}</h4>

    <button @click="incrementCount">Increment count from child C</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";

export default {
  name: "ChildC",
  setup() {
    const childUserName = inject("c_userName", "Default User");
    const childCount = inject("c_count", 0);
    const childHero = inject("c_hero", {});
    const incrementCount = inject("incrementCount");
    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      incrementCount
    };
  },
  inject: ["userName"],
};
</script>

<style scoped>
</style>