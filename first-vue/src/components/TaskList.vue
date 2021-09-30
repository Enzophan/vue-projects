<template>
  <div>
    <Task v-for="(task, index) in tasks" :key="index" :taskName="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskList",
  components: {
    Task,
  },
  props: ["tasks"],
};
</script>

<style scoped>
</style>