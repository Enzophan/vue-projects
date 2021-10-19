<template>
  <div>
    <Component3 />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Component3 from "@/components/Random/Component3.vue";

@Options({
  components: {
    Component3,
  },
})
export default class Component2 extends Vue {}
</script>

<style scoped>
</style>