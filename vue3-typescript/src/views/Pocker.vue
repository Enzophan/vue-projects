<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item" v-if="!isGuest">
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
  <ModalComponent
    v-if="openModal"
    @closeModal="closeModalAddRoom"
    @addRoom="addRoomHandle"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import RoomCard from "@/components/RoomsCard.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import userStore from "@/stores/user";
import roomStore from "@/stores/pocker";

export default defineComponent({
  components: {
    RoomCard,
    ModalComponent,
  },
  setup() {
    const router = useRouter();
    const selectedRoom = ref("");
    const openModal = ref(false);
    const isGuest = ref(true);
    const { state, getters, getRooms, setRoom, addRoom } = roomStore;
    onMounted(() => {
      getRooms();
      if (userStore.state.email && userStore.state.role) isGuest.value = false;
    });

    const selectRoom = (roomId: string) => {
      setRoom(roomId);
      router.push(`/pocker/${roomId}`);
      // router.push({ name: "pocker", params: { id: roomId } });
    };

    const openModalAddRoom = (event: Event) => {
      event.preventDefault();
      openModal.value = !openModal.value;
    };

    const closeModalAddRoom = () => {
      openModal.value = !openModal.value;
    };

    const addRoomHandle = (roomName: string) => {
      addRoom(roomName);
      openModal.value = !openModal.value;
    };

    return {
      selectedRoom,
      openModal,
      isGuest,
      state,
      getters,
      selectRoom,
      openModalAddRoom,
      closeModalAddRoom,
      addRoomHandle,
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