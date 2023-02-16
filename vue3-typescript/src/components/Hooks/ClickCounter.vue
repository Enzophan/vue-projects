<template>
  <div>
    <h5>Click Counter</h5>
    <button @click="counter.increment">Clicks: {{ counter.count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from "@/composables/counter.ts";
export default defineComponent({
  props: ["incBy"],
  setup(props) {
    const counter = useCounter(props.incBy);
    return { counter };
  },
});
</script>

<style></style>
