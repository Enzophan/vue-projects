<template>
  <div>
    <h2>Job Details Page</h2>
    <p>The job id is {{ id }}</p>
    <p>The job idRef is {{ idRef }}</p>
  </div>
</template>

<script>
import { toRefs } from "vue";
// import { ref } from "vue";
// import { useRoute } from "vue-router";

export default {
  name: "JobDetails",
  props: ["id"],
  setup(props) {
    const idRef = toRefs(props).id;
    return { idRef };
  },
  //   setup() {
  //     const route = useRoute();
  //     const id = ref(route.params.id);
  //     return {
  //       id,
  //     };
  //   },
};
</script>

<style scoped>
</style>