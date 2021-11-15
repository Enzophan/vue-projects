<template>
  <div class="item">
    <div class="head">
      <span class="priority">
        <span>Priority:</span>
        <span class="badge" :style="{ backgroundColor: priorityClr }">{{
          item.priority
        }}</span>
      </span>
      <i class="fas fa-sort handle" :style="{ color: clr }"></i>
    </div>
    <p class="title">{{ item.title }}</p>
    <p class="text-right">
      <button class="btn btn-delete" @click="handleDeleteItem">Delete</button>
    </p>
  </div>
</template>

<script>
import EventBus from "@/utils/eventBus.js";

export default {
  props: ["item", "clr", "boardId", "itemId"],
  computed: {
    priorityClr() {
      if (this.item.priority === "low") {
        return "#00ff00";
      } else if (this.item.priority === "medium") {
        return "#ffa500";
      } else {
        return "#ff0000";
      }
    },
  },
  methods: {
    handleDeleteItem() {
      EventBus.$emit("deleteItem", {
        boardId: this.boardId,
        itemId: this.itemId,
      });
    },
  },
};
</script>

<style>
</style>