<template>
  <div class="item">
    <div class="head">
      <span class="priority">
        <span>Priority:</span>
        <span class="badge" :style="{ backgroundColor: priorityClr }">{{
          item.priority
        }}</span>
      </span>
      <i class="fas fa-sort" :style="{ color: clr }"></i>
    </div>
    <p class="title">{{ item.title }}</p>
    <p class="text-right">
      <button class="btn btn-delete">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["item", "clr"],
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
};
</script>

<style>
</style>