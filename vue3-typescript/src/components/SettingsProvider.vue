<template>
  <slot />
  <!-- <span> {{ settings }} </span> -->
</template>

<script lang="ts">
// https://logaretm.com/blog/type-safe-provide-inject/
// https://www.youtube.com/watch?v=dOxjzgZpTfk
import { defineComponent, provide, reactive, watch } from "vue";

interface Settings {
  theme: string;
}
// const SettingsKey: InjectionKey<Settings> = Symbol("settings");

export default defineComponent({
  setup() {
    const settings: Settings = reactive({
      theme: "light",
    });
    provide("settings", settings);
    watch(settings, (settings) => {
      console.log(`Provider: theme has been changed to ${settings.theme}`);
    });
    return { settings };
  },
});
</script>
