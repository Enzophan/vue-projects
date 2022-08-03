<template>
  <li
    class="list-group-item"
    :class="active ? 'active' : null"
    @click="selectRoom(room._id)"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ room.roomName }}</h5>
      <small class="text-muted">{{ lastDate }}</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  emits: ["selectRoom"],
  props: {
    room: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const lastDate = computed(() =>
      moment(props.room.createdTime).startOf("day").fromNow()
    );
    const selectRoom = (roomId: string) => {
      emit("selectRoom", roomId);
    };

    return { lastDate, selectRoom };
  },
});
</script>
