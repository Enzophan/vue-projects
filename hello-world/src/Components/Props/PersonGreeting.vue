<template>
  <div>Hello {{ fullName }}</div>
  <div><span>Custom Events and Composition API</span></div>
  <button @click="sendEvent">Call Heroes</button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "PersonGreeting",
  setup(props, context) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent() {
      context.emit("callHeroes", fullName.value);
    }

    return {
      fullName,
      sendEvent,
    };
  },
  props: ["firstName", "lastName"],
  emits: ['callHeroes']
};
</script>

<style scoped>
</style>