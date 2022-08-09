<template>
  <div>
    <h3>roomId {{ roomId }}</h3>
    <form @submit.prevent="submit" class="form">
      <input name="name" v-model="name" />
      <button>Submit</button>
    </form>
    <div>
      <button @click="leave">Leave Room</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, ref } from "vue";
import { useRoute } from "vue-router";
import userStore from "@/stores/user";
import { useSocketIo, useSocketPocker } from "@/service/socket";

export default defineComponent({
  setup() {
    const socket = useSocketIo("5000");
    const [joinRoom, leaveRoom] = useSocketPocker(socket);
    const name = ref("");
    const { state } = userStore;

    const router = useRoute();
    const roomId = computed(() => router.params.id) as ComputedRef<string>;

    const submit = () => {
      const message = {
        userId: state._id,
        name: name.value,
        roomId: router.params.id,
      };
      joinRoom(JSON.stringify(message));
      name.value = "";
    };

    const leave = () => {
      const message = {
        userId: state._id,
        roomId: router.params.id,
      };
      leaveRoom(JSON.stringify(message));
    };

    return { roomId, name, submit, leave };
  },
});
</script>
