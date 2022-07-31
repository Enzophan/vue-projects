<template>
  <div class="text-center my-3">
    <h4>Cat facts</h4>
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/facts">List</HeaderLink>
      <HeaderLink to="/about">About</HeaderLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLink from "@/components/HeaderLink.vue";

export default defineComponent({
  components: { HeaderLink },
});
</script>
