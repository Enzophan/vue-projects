<template>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ room.roomName }}</h5>
      <small class="text-muted">{{ lastDate }}</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const lastDate = computed(() =>
      moment(props.room.createdTime).endOf("day").fromNow()
    );

    return { lastDate };
  },
});
</script>
