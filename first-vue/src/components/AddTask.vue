<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="$emit('onAddTask', name)">Add Task</button>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      name: "",
    };
  },
  emits: {
    onAddTask: (name) => {
      if (!name) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
</style>