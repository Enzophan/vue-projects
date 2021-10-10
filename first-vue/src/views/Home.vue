<template>
  <div class="home">
    <h2>Home Page</h2>
    <div>
      <h4>{{ title }}</h4>
      <input type="text" v-model="newTitle" @keypress.enter="changeTitle" />
      <button @click="changeTitle">Change Title</button>
    </div>
    <div>
      <Notes />
      <AddNewNote />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Notes from "../components/Notes/Notes.vue";
import AddNewNote from "../components/Notes/AddNewNote.vue";

export default {
  name: "Home",
  components: {
    Notes,
    AddNewNote,
  },
  setup() {
    const store = useStore();
    const title = computed(() => {
      return store.state.title;
    });

    const newTitle = ref("");

    function changeTitle() {
      store.commit("setTitle", newTitle.value);
      newTitle.value = "";
    }

    return {
      title,
      newTitle,
      changeTitle,
    };
  },
};
</script>
