<template>
  <div>
    <h1>Board</h1>
    <h2 class="msg" v-if="boards.length === 0">You don't have any boards</h2>
    <div class="boards-container" v-else>
      <!-- <p>{{ boards.length }}</p> -->
      <!-- <div
        class="board"
        v-for="(board, index) in boards"
        :key="index"
        :style="{ borderColor: board.color }"
      >
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
            <p v-for="(item, index) in board.items" :key="index">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div> -->

      <Board
        v-for="(board, index) in boards"
        :board="board"
        :id="index"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
//Learning: https://www.youtube.com/playlist?list=PLBh9z20x5LUoALR6IdyNlJSiBP6BIEEFA

import Board from "@/components/Board.vue";
import EventBus from "@/utils/eventBus.js";

export default {
  components: {
    Board,
  },
  mounted() {
    EventBus.$on("addBoard", (data) => {
      this.boards.push({
        title: data.inputA,
        color: data.inputB || "#000",
        items: [],
      });
    });

    EventBus.$on("addItem", (data) => {
      // console.log("addItem ", data);
      this.boards[data.boardIndex].items.push({
        title: data.inputA,
        priority: data.inputB || "low",
      });
    });

    EventBus.$on("deleteBoard", (boardIndex) => {
      // console.log("deleteBoard", boardIndex);
      this.boards.splice(boardIndex, 1);
    });

    EventBus.$on("deleteItem", (data) => {
      // console.log("deleteItem", data);
      this.boards[data.boardId].items.splice(data.itemId, 1);
    });
  },
  data() {
    return {
      boards: [
        {
          title: "Test board 1",
          color: "red",
          items: [
            {
              title: "Item 01",
              priority: "high",
            },
            {
              title: "Item 02",
              priority: "low",
            },
            {
              title: "Item 03",
              priority: "medium",
            },
          ],
        },
        {
          title: "Test board 2",
          color: "blue",
          items: [
            {
              title: "Item 01",
              priority: "high",
            },
            {
              title: "Item 02",
              priority: "low",
            },
            {
              title: "Item 03",
              priority: "medium",
            },
          ],
        },
        {
          title: "Test board 3",
          color: "green",
          items: [],
        },
      ],
    };
  },
};
</script>

<style>
</style>