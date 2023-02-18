<template>
  <div>
    <h3>{{ message }}</h3>
    <div v-if="!loaded">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          {{ photo.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useApi } from "@/composables/api";
// import usePhotos from "@/composables/photos.ts";

interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    props.message; // <-- type: string
    const { response: photos, request } = useApi<Photos>(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const loaded = ref(false);

    if (loaded.value == false) {
      request();
      loaded.value = true;
    }

    return { photos, loaded };
  },
});
</script>

<style scoped></style>
