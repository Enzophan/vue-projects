<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item">
          <a class="nav-link active" @click="openModalAddRoom">Add Room</a>
        </li>
        <li class="nav-item">
          <h3 class="nav-link">List Rooms</h3>
        </li>
      </ul>
    </div>
    <ul
      class="list-group list-group-flush"
      v-for="(item, index) in state.rooms"
      :key="index"
    >
      <RoomCard
        :room="item"
        @selectRoom="selectRoom"
        :active="state.selectedRoom === item._id ? true : false"
      />
    </ul>
  </div>
  <ModalComponent v-if="openModal" @closeModal="closeModalAddRoom" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import RoomCard from "@/components/RoomsCard.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import roomStore from "@/stores/pocker";

export default defineComponent({
  components: {
    RoomCard,
    ModalComponent,
  },
  setup() {
    const selectedRoom = ref("");
    const openModal = ref(false);
    const { state, getters, getRooms, setRoom } = roomStore;
    onMounted(() => {
      getRooms();
    });

    const selectRoom = (roomId: string) => {
      setRoom(roomId);
    };

    const openModalAddRoom = (event: Event) => {
      event.preventDefault();
      openModal.value = !openModal.value;
    };

    const closeModalAddRoom = () => {
      openModal.value = !openModal.value;
    };

    return {
      selectedRoom,
      openModal,
      state,
      getters,
      selectRoom,
      openModalAddRoom,
      closeModalAddRoom,
    };
  },
});
</script>

<style scoped>
.active {
  background-color: aqua;
  border: none;
}
</style>