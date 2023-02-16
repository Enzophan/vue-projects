<template>
  <div>
    <h5>Hover Counter</h5>
    <div class="hover-zone" @mouseover="increment">Hovers: {{ count }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from "@/composables/counter.ts";
export default defineComponent({
  setup() {
    const { count, increment } = useCounter(5);
    return { count, increment };
  },
});
</script>

<style>
div.hover-zone {
  background: gainsboro;
}
</style>
