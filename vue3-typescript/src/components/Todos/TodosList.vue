<template>
  <div v-if="error">
    <h3>Error: {{ error }}</h3>
  </div>
  <div v-if="loading">
    <h3>Loading...</h3>
  </div>
  <div>
    <h3>Todos fake API</h3>
    <ul v-for="item in data" :key="item.id">
      <li><b>Name: </b>{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFetch } from "@/composables/fetch_v2.ts";

export default defineComponent({
  setup() {
    const { data, error, loading } = useFetch(
      "https://jsonplaceholder.typicode.com/todos"
    );

    return {
      data,
      error,
      loading,
    };
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
