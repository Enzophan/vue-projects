<template>
  <div>
    <h3>Counter Reuseable</h3>
    <ClickCounter :incBy="10" />
    <HoverCounter />
    <div>
      <div>
        <h3>
          Test Hook <strong>onBeforeUpdate</strong> & <strong>onUpdated</strong>:
          {{ counterData.title }}
        </h3>
      </div>
      <div>
        <button @click="decrementCounter">-</button>
        <span>{{ counterData.count }}</span>
        <button @click="incrementCounter">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
} from "vue";
import ClickCounter from "@/components/Hooks/ClickCounter.vue";
import HoverCounter from "@/components/Hooks/HoverCounter.vue";

export default defineComponent({
  name: "Hooks",
  components: { ClickCounter, HoverCounter },
  setup() {
    onMounted(() => {
      console.log("The onMounted first");
    });
    const counterData = reactive({
      count: 0,
      title: "My counter",
    });

    const incrementCounter = () => {
      counterData.count++;
    };
    const decrementCounter = () => {
      counterData.count--;
    };

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onActivated(() => {
      console.log("onActivated");
    });
    onDeactivated(() => {
      console.log("onDeactivated");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });

    return { counterData, incrementCounter, decrementCounter };
  },
});
</script>

<style></style>
