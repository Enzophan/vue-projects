<template>
  <div class="board" :style="{ borderColor: board.color }">
    <div class="head">
      <span class="title">{{ board.title }}</span>
      <span class="head-btns">
        <AddItemBtn :boardId="id" />
        <i class="fas fa-trash" @click="handleDeleteBoard"></i>
      </span>
    </div>
    <div>
      <h2 class="msg" v-if="board.items.length === 0">No items yet!</h2>
      <div v-else>
        <draggable
          v-model="board.items"
          handle=".handle"
          group="items"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <Item
              v-for="(item, index) in board.items"
              :key="item.title"
              :item="item"
              :clr="board.color"
              :boardId="id"
              :itemId="index"
            />
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Item from "@/components/Item.vue";
import AddItemBtn from "@/components/AddItemBtn.vue";
import EventBus from "@/utils/eventBus.js";

export default {
  components: {
    Item,
    AddItemBtn,
    draggable,
  },
  data() {
    return {
      drag: false,
    };
  },
  props: {
    board: {
      require: true,
      type: Object,
    },
    id: {
      require: true,
      type: Number,
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    handleDeleteBoard() {
      EventBus.$emit("deleteBoard", this.id);
    },
  },
};
</script>

<style>
</style>