<template>
  <div>
    <h3>{{ state.count }} x 2 = {{ getters.timmes2 }}</h3>
    <button class="btn btn-success block m-2" @click="inc(1)">Inc</button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import counterStore from "@/stores/counter";

export default defineComponent({
  setup() {
    const { state, getters, inc } = counterStore;
    return { state, getters, inc };
  },
});
</script>