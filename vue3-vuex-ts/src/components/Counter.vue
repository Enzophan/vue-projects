<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      class="
        bg-gray-300
        mx-auto
        shadow-md
        flex flex-col
        justify-center
        items-center
      "
    >
      <h3 class="text-3xl">Increment Counter</h3>
      <button @click="inc()">Press Me</button>
      <button @click="actionInc()">Press Me Increment 2</button>
      <h5>Counter: {{ count.counter }}</h5>
      <h5>Double Counter: {{ doubleGetter }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
// import { useStore } from "vuex";
import { ActionTypes, MutationTypes, useStore } from "../store";

export default defineComponent({
  name: "Counter",
  props: {
    msg: String,
  },
  methods: {},
  setup() {
    const store = useStore();
    const count = ref(store.state);
    const inc = () => {
      store.commit(MutationTypes.INC_COUNTER, 1);
    };

    const actionInc = () => {
      store.dispatch(ActionTypes.INC_COUNTER, 2);
    };

    const doubleGetter = computed(() => store.getters.doubleCounter);

    return { count, inc, actionInc, doubleGetter };
  },
});
</script>

<style scoped>
</style>