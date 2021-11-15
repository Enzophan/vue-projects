<template>
  <span>
    <button @click.prevent="handleClickAddBoard" class="btn">
      <i class="fas fa-plus"></i> add item
    </button>

    <Modal
      v-if="showModal"
      title="Add Item"
      labelA="Enter Item"
      labelB="Enter Priority"
      inputBtype="text"
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
  props: ["boardId"],
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
      EventBus.$emit("addItem", {
        ...data,
        boardIndex: this.boardId,
      });
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>