<template>
  <div>
    <h2>Job Details Page</h2>
    <p>The job id is {{ id }}</p>
  </div>
</template>

<script>
// import { toRefs } from "vue";
// import { useRoute } from "vue-router";

export default {
  name: "JobDetails",
  props: ["id"],
  //   setup(props) {
  //     const id = toRefs(props).id;
  //     console.log("id ", id.value);
  //     return { id };
  //   },
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