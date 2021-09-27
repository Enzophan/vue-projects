<template>
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
import CounterMixin from "../Mixins/counter";

export default {
  name: "HoverCounter",
  mixins: [CounterMixin],
};
</script>

<style scoped>
</style>