<template>
  <div>
    <input type="text" placeholder="Hero" v-model="hero" />
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "VModel",
  setup() {
    const hero = ref("");
    const state = reactive({
      fName: "",
      lName: "",
    });
    return {
      hero,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>