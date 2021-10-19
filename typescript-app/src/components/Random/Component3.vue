<template>
  <div>
    <Component4 />
    <History />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Component4 from "@/components/Random/Component4.vue";
import History from "@/components/Random/History.vue";

@Options({
  components: {
    Component4,
    History,
  },
})
export default class Component3 extends Vue {}
</script>

<style scoped>
</style>