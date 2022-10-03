<template>
  <li
    class="list-group-item"
    :class="active ? 'active' : null"
    @click="selectRoom(room._id)"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Room: {{ room.roomName }}</h5>
      <small class="text-muted">{{ lastDate }}</small>
    </div>
    <p class="mb-1">Planning Poker</p>
    <small class="text-muted"
      >0: Task is already completed. <br />
      1/2: The task is tiny.<br />
      1, 2, 3: There are used for small tasks. <br />
      5, 8, 13: There are used for medium sized tasks. <br />
      ?: I have no idea how long this task is going to take. <br />
    </small>
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
