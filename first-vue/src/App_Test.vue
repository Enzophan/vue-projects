<template>
  <div id="app" class="container">
    <h2>{{ title }}</h2>
    <button @click="updateTitle('Updated Vuex')">Change Title</button>
    <div>
      <AddTask @onAddTask="addTask" />
      <TaskList :tasks="tasks" />
    </div>
    <div>
      <Notes />
      <AddNewNote />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";
import Notes from "./components/Notes/Notes.vue";
import AddNewNote from "./components/Notes/AddNewNote.vue";

export default {
  name: "App",
  components: {
    AddTask,
    TaskList,
    Notes,
    AddNewNote,
  },
  data() {
    return {
      tasks: [],
      newTask: {
        name: "",
        done: false,
      },
    };
  },
  computed: {
    ...mapGetters(["title"]),
  },
  methods: {
    addTask(name) {
      this.tasks.push({ name: name, done: false });
    },
    ...mapMutations(["setTitle"]),
    ...mapActions(["updateTitle"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
