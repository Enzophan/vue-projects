<template>
  <div class="home">
    <h3>Hot news!!!</h3>
    <span>Mouse position is at: {{ x }}, {{ y }}</span>
    <News msg="Today's news" />
    <Photos message="Beautiful photos"/>
    <!-- <span>{{ mySpinner }}</span> -->
    <!-- <button @click="mySpinner.val = !mySpinner.val">Click Spin</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import News from "@/components/News.vue";
import Photos from "@/components/Photos.vue";
import { useMouse } from "@/composables/event";

export default defineComponent({
  name: "Home",
  inject: ["mySpinner"],
  components: {
    News,
    Photos,
  },
  setup() {
    const { x, y } = useMouse();
    return { x, y };
  },
});
</script>

<style scoped></style>
