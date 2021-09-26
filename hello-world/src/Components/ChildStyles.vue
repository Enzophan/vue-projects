<template>
  <div>
    <slot></slot>
  </div>
  <div>
    <h4>Test ChildStyles</h4>
  </div>
</template>

<script>
export default {
  name: "ChildStyles",
};
</script>

<style scoped>
h4 {
  color: olivedrab;
}
</style>