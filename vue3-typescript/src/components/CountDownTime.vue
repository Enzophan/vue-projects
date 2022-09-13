<template>
  <div class="badge bg-primary text-wrap">
    <p class="count-time">{{ displayTimeLeft }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, ref } from "vue";
import { zeroPadded } from "@/utils/url-manipilation";

export default defineComponent({
  props: {
    getEndTime: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const secondsLeft = ref(0);
    const currentTime = ref(Date.now());
    // const endTime =  currentTime.value + secondsLeft.value * 1000;
    const endTime = Date.parse(props.getEndTime);
    const displayTimeLeft = computed(() => {
      // const minutes = Math.floor((secondsLeft.value % 3600) / 60);
      // const seconds = secondsLeft.value % 60;

      const seconds = Math.floor((secondsLeft.value / 1000) % 60);
      const minutes = Math.floor((secondsLeft.value / 1000 / 60) % 60);
      const hours = Math.floor((secondsLeft.value / (1000 * 60 * 60)) % 24);
      const days = Math.floor(secondsLeft.value / (1000 * 60 * 60 * 24));
      if (days > 0) {
        return `${zeroPadded(days)} day(s) : ${zeroPadded(
          hours
        )} hour(s) | ${zeroPadded(minutes)} : ${zeroPadded(seconds)}`;
      } else if (hours > 0) {
        return `${zeroPadded(hours)} hour(s) | ${zeroPadded(
          minutes
        )} : ${zeroPadded(seconds)}`;
      } else if (minutes >= 0) {
        return `${zeroPadded(minutes)} : ${zeroPadded(seconds)}`;
      } else {
        return `00 : 00`;
      }
    });

    const countDown = setInterval(() => {
      // secondsLeft.value = Math.round((endTime - Date.now()) / 1000);
      secondsLeft.value = endTime - Date.now();
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

<style scoped>
.count-time {
  margin: auto;
  padding: 10px;
}
</style>