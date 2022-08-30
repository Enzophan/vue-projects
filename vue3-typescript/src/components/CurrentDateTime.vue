<template>
  <div>
    <p class="font-bold pt-3 text-6xl">
      {{ currentTime.toLocaleTimeString() }}
    </p>
    <!-- <p class="font-bold text-sm mb-1 flex justify-end mr-3">
      {{ currentTime.toLocaleDateString() }}
    </p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  setup() {
    const currentTime = ref(new Date());
    const updateCurrentTime = () => {
      currentTime.value = new Date();
    };
    const updateTimeInterval = setInterval(updateCurrentTime, 1000);
    onBeforeUnmount(() => {
      clearInterval(updateTimeInterval);
    });
    return {
      currentTime,
    };
  },
});
</script>
