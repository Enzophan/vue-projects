<template>
  <div>
    <h3>Photos</h3>
    <!-- <ul>
      <li v-for="photo in photos" :key="photo.id">
        {{ photo.title }}
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    props.message; // <-- type: string
  },
});
</script>

<style scoped></style>
