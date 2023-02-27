<template>
  <div class="home">
    <h3>Vue TS project of Zinzo!!!</h3>
    <div class="multi-language">
      <span>{{ $t("homeMessage") }}</span>
      <HelloWorld />
    </div>
    <span>Mouse position is at: {{ x }}, {{ y }}</span>
    <News msg="Today's news" />
    <Photos message="Beautiful photos" />
    <!-- <span>{{ mySpinner }}</span> -->
    <!-- <button @click="mySpinner.val = !mySpinner.val">Click Spin</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import News from "@/components/News.vue";
import Photos from "@/components/Photos.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useMouse } from "@/composables/event";

export default defineComponent({
  name: "Home",
  inject: ["mySpinner"],
  components: {
    News,
    Photos,
    HelloWorld,
  },
  setup() {
    const { x, y } = useMouse();
    return { x, y };
  },
});
</script>

<style scoped></style>
