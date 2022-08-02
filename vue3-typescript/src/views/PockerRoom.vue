<template>
  <div class="list-group">
    <div v-for="(item, index) in state.rooms" :key="index">
      <RoomCard :room="item" />
    </div>
    <!-- <a
      href="#"
      class="list-group-item list-group-item-action active"
      aria-current="true"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small>And some small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-muted">And some muted small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-muted">And some muted small print.</small>
    </a> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import RoomCard from "@/components/RoomsCard.vue";
import roomStore from "@/stores/pocker";

export default defineComponent({
  components: {
    RoomCard,
  },
  setup() {
    const selectedRoom = ref("");
    const { state, getters, getRooms } = roomStore;
    onMounted(() => {
      getRooms();
    });

    return { selectedRoom, state, getters };
  },
});
</script>

<style scoped>
.list-group {
  max-width: 50%;
}
.active {
  background-color: aqua;
  border: 1px;
  border-radius: 5px;
}
</style>