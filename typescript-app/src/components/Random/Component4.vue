<template>
  <div>
    <Counter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Counter from "@/components/Random/Counter.vue";

@Options({
  components: {
    Counter,
  },
})
export default class Component4 extends Vue {}
</script>

<style scoped>
</style>