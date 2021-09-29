<template>
  <div>Composition API Lifecycle Hooks</div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "LifecycleC",
  setup() {
    onBeforeMount(() => {
      console.log("LifecycleC onBeforeMount");
    });
    onMounted(() => {
      console.log("LifecycleC onMounted");
    });
    onBeforeUpdate(() => {
      console.log("LifecycleC onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("LifecycleC onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("LifecycleC onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("LifecycleC onUnmounted");
    });
  },
};
</script>

<style scoped>
</style>