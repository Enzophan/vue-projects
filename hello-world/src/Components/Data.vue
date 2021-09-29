<template>
  <div>
    <h2>Options - {{ o_firstName }}</h2>
    <h2>Composition - {{ c_firstName }}</h2>
    <h2>Composition - {{ greet }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Data",
  setup() {
    const c_firstName = ref("Clark");
    c_firstName.value = "Diana";
    const greet = `Hello ${c_firstName.value}`;
    // console.log("c_firstName ", c_firstName);
    return {
      c_firstName,
      greet,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>

<style scoped>
</style>