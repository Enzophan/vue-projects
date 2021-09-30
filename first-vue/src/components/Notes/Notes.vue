<template>
  <div>
    <ul>
      <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Notes",
  setup() {
    const store = useStore();
    const notes = computed(() => {
      return store.state.notes;
    });

    return {
      notes,
    };
  },
};
</script>

<style scoped>
</style>