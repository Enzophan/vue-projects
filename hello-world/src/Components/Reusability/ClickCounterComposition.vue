<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from "../../Composables/useCounter";
export default {
  name: "ClickCounterComposition",
  setup() {
    const { count, incrementCount } = useCounter(100, 10);

    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped>
</style>