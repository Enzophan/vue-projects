<template>
  <span>
    <button @click.prevent="handleClickAddBoard" class="btn">
      <i class="fas fa-plus"></i> Add Board
    </button>
    <Modal
      v-if="showModal"
      title="Add Board"
      labelA="Board Title"
      labelB="Board Color"
      inputBtype="color"
      @close="handleClickAddBoard"
      @submit="handleSubmit"
    />
  </span>
</template>

<script>
import Modal from "@/components/Modal.vue";
import EventBus from "@/utils/eventBus.js";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handleClickAddBoard() {
      this.showModal = !this.showModal;
    },
    handleSubmit(data) {
      console.log("handleSubmit ", data);
      EventBus.$emit("addBoard", data);
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>