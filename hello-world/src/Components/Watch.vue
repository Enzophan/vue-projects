<template>
  <div>
    <input type="text" placeholder="Name" v-model="name" />

    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <input type="text" placeholder="Reactive First Name" v-model="fName" />
    <input type="text" placeholder="Reactive Last Name" v-model="lName" />
    <input
      type="text"
      placeholder="Reactive Hero Name"
      v-model="options.heroName"
    />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
import _ from "lodash";

export default {
  name: "Watch",
  setup() {
    const firstName = ref("");
    const lastName = ref("Phan");

    watch(
      [firstName, lastName],
      (newValue, oldValue) => {
        console.log("Composition Old Value", oldValue);
        console.log("Composition New Value", newValue);
      },
      {
        immediate: true,
      }
    );

    const state = reactive({
      fName: "",
      lName: "",
      options: {
        heroName: "",
      },
    });

    watch(
      () => {
        return _.cloneDeep(state);
      },
      (newValue, oldValue) => {
        // console.log("Reactive Old Value fName", oldValue.fName);
        // console.log("Reactive New Value fName", newValue.fName);
        // console.log("Reactive Old Value lName", oldValue.lName);
        // console.log("Reactive New Value lName", newValue.lName);

        console.log("Reactive Old Value ", oldValue);
        console.log("Reactive New Value ", newValue);
      }
    );

    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log("Reactive fName Old Value", oldValue);
        console.log("Reactive fName New Value", newValue);
      }
    );

    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log("Reactive options Old Value", oldValue);
        console.log("Reactive options New Value", newValue);
      },
      {
        deep: true,
      }
    );

    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("Old Value", oldValue);
      console.log("New Value", newValue);
    },
  },
};
</script>

<style scoped>
</style>