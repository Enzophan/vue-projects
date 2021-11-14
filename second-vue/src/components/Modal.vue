<template>
  <div class="modal">
    <div class="content">
      <p class="title">{{ title }}</p>
      <div class="form">
        <label>{{ labelA }}</label>
        <input type="text" v-model="inputA" />
        <label>{{ labelB }}</label>
        <input :type="inputBtype" v-model="inputB" />
      </div>
      <p class="text-right">
        <button @click="handleCloseBtn" class="btn cancel">Cancel</button>
        <button @click="submit" class="btn add">Submit</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "labelA", "labelB", "inputBtype"],
  data() {
    return {
      inputA: "",
      inputB: "",
    };
  },
  methods: {
    handleCloseBtn() {
      this.$emit("close");
    },
    submit() {
      this.$emit("submit", {
          inputA: this.inputA,
          inputB: this.inputB,
      });
    },
  },
};
</script>

<style>
</style>