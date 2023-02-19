<template>
  <div v-if="error">
    <h3>Error: {{ error }}</h3>
  </div>
  <div v-if="loading">
    <h3>Loading...</h3>
  </div>
  <slot :data="data"></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFetch } from "@/composables/fetch_v2.ts";

export default defineComponent({
  props: ["url"],
  setup(props) {
    const { data, error, loading } = useFetch(props.url, {});
    return {
      data,
      error,
      loading,
    };
  },
});
</script>
