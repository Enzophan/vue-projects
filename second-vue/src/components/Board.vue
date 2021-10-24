<template>
  <div class="board" :style="{ borderColor: board.color }">
    <div class="head">
      <span class="title">{{ board.title }}</span>
      <span class="head-btns">
        <button class="btn"><i class="fas fa-plus" />add item</button>
        <i class="fas fa-trash"></i>
      </span>
    </div>
    <div>
      <h2 class="msg" v-if="board.items.length === 0">No items yet!</h2>
      <div v-else>
        <!-- <p v-for="(item, index) in board.items" :key="index">
          {{ item.title }}
        </p> -->
        <Item v-for="(item, index) in board.items" :key="index" :item="item" :clr="board.color"/>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  components: {
    Item,
  },
  props: {
    board: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style>
</style>