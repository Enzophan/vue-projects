<template>
  <button
    :class="{ 'dark-mode': settings.theme === 'dark' }"
    @click="toggleMode"
  >
    Switch to {{ oppsiteTheme }} mode
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
// interface Settings {
//   theme: string;
// }
// const SettingsKey: InjectionKey<Settings> = Symbol("settings");

export default defineComponent({
  setup() {
    const settings = inject("settings", { theme: "light" });
    const oppsiteTheme = computed(() =>
      settings.theme === "dark" ? "light" : "dark"
    );
    const toggleMode = () => {
      settings.theme = oppsiteTheme.value;
      console.log("settings2 ", settings);
    };
    return { settings, oppsiteTheme, toggleMode };
  },
});
</script>
