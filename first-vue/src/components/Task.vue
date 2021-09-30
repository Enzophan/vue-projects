<template>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" v-model="task.done" />
    <label class="form-check-label" :class="{ done: task.done }">{{
      task.name
    }}</label>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskName"],
  data() {
    return {
      task: this.taskName,
    };
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>