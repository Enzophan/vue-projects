<template>
  <div class="content">
    <h3>To do list</h3>
    <universal-list url="https://jsonplaceholder.typicode.com/todos" v-slot="{ data }">
      <h2>Todos Universal List</h2>
      <ol>
        <li v-for="item in data" :key="item.id">
          {{ item.title }} - {{ item.completed }}
        </li>
      </ol>
    </universal-list>
    <TodosList />
    <div>
      <input v-model="newItemText" v-on:keyup.enter="addNewTodo" />
      <button @click="addNewTodo">Add</button>
      <button @click="removeTodo">Remove</button>
      <transition-group name="list" tag="ol">
        <li v-for="task in tasks" v-bind:key="task">{{ task }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, readonly } from "vue";
import TodosList from "@/components/Todos/TodosList.vue";
import UniversalList from "@/components/Todos/UniversalList.vue";

export default defineComponent({
  name: "Todos",
  components: { TodosList, UniversalList },
  setup() {
    const name = ref("");
    const tasks = ref(["Read books", "Write my posts", "Meet my friends"]);
    const newItemText = ref("");

    const addNewTodo = () => {
      if (newItemText.value !== "") {
        tasks.value.unshift(newItemText.value);
      }
      newItemText.value = "";
    };
    const removeTodo = () => {
      tasks.value.shift();
    };
    return {
      name: readonly(name),
      tasks: readonly(tasks),
      newItemText,
      addNewTodo,
      removeTodo,
    };
  },
});
</script>
