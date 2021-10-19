<template>
  <div>
    <Component2 />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Component2 from "@/components/Random/Component2.vue";

@Options({
  components: {
    Component2,
  },
})
export default class Component1 extends Vue {}
</script>

<style scoped>
</style>