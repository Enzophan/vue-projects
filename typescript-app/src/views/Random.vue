<template>
  <div class="random">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Component1 />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Component1 from "@/components/Random/Component1.vue";

@Options({
  components: {
    Component1,
  },
})
export default class Random extends Vue {}
</script>

<style scoped lang="scss">
</style>