<template>
  <div>
    <input type="text" v-model="title" @keypress.enter="save" />
    <p>Total Notes: {{ totalNotes }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "AddNewNote",
  setup() {
    const store = useStore();
    const totalNotes = computed(() => {
      return store.getters.totalNotes;
    });
    const title = ref("");

    function save() {
      store.commit("SAVE_NOTE", title.value);
      title.value = "";
    }

    return {
      totalNotes,
      title,
      save,
    };
  },
};
</script>

<style scoped>
</style>