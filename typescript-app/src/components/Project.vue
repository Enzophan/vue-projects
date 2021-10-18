<template>
  <div>
    <h3>Project test</h3>
    <div class="message">
      <p>{{ message }}</p>
    </div>
    <p>{{ object.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    message: { type: String, require: true },
    object: {
      type: Object as PropType<{ name: string; username: string }>,
      require: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.message {
  background: burlywood;
  padding: 10px;
  margin: 20px;
  p {
    color: red;
  }
}
p {
  color: blueviolet;
}
</style>
