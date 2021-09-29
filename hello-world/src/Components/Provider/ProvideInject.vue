<template>
  <div>
    <h3>Parent component {{ name }}</h3>
    <h3>Parent component count {{ count }}</h3>
    <h3>Parent component hero {{ firstName }} {{ lastName }}</h3>

    <button @click="incrementCount">Increment Count</button>
    <ChildA />
  </div>
</template>

<script>
import { provide, ref, reactive, toRefs } from "vue";
import ChildA from "./ChildA.vue";

export default {
  name: "ProvideInject",
  components: {
    ChildA,
  },
  setup() {
    provide("c_userName", "Mint Mint");

    const count = ref(0);
    function incrementCount() {
      count.value++;
    }

    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });

    provide("c_count", count);
    provide("c_hero", state);
    provide("incrementCount", incrementCount);

    return {
      count,
      ...toRefs(state),
      incrementCount
    };
  },
  data() {
    return {
      name: "Kent",
    };
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped>
</style>