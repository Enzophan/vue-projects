<template>
  <div>
    <!-- <p>{{ currentTime }}</p>
    <p>{{ endTime }}</p> -->
    <p>{{ displayTimeLeft }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, ref } from "vue";
import { zeroPadded } from "@/utils/url-manipilation";

export default defineComponent({
  props: {
    seconds: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  setup(props) {
    const secondsLeft = ref(props.seconds);
    const currentTime = ref(Date.now());
    const endTime = currentTime.value + secondsLeft.value * 1000;

    const displayTimeLeft = computed(() => {
      const minutes = Math.floor((secondsLeft.value % 3600) / 60);
      const seconds = secondsLeft.value % 60;
      return `${zeroPadded(minutes)} : ${zeroPadded(seconds)}`;
    });

    const countDown = setInterval(() => {
      secondsLeft.value = Math.round((endTime - Date.now()) / 1000);
      if (secondsLeft.value <= 0) {
        clearInterval(countDown);
        return;
      }
    }, 1000);

    onBeforeUnmount(() => {
      clearInterval(countDown);
    });

    return {
      currentTime,
      endTime,
      displayTimeLeft,
    };
  },
});
</script>
