<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="setName">Change Name</button>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <button @click="changeFirstLastName">Change First Last Name</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "Methods",
  setup() {
    const name = ref("Kent");
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });

    const setName = () => {
      name.value = "May May";
    };

    function changeFirstLastName() {
      state.firstName = "Mint";
      state.lastName = "Phan";
    }
    return {
      name,
      setName,
      ...toRefs(state),
      changeFirstLastName,
    };
  },
};
</script>

<style scoped>
</style>