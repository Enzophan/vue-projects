<template>
  <Header />
  <div class="container my-3">
    <router-view />
  </div>
</template>

<script lang="ts">
//Please refer: https://www.youtube.com/watch?v=hY7F7U8qDPA
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: { Header },
});
</script>
