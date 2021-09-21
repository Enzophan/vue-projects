<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt="site logo" />
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by localtion</button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import JobsList from "./components/JobsList.vue";
import Job from "./types/Job";
import OrderTerm from "./types/OrderTerm";

export default defineComponent({
  name: "App",
  components: { JobsList },
  setup() {
    // const state = reactive({
    //   name: "Lee",
    //   age: 25 as number | string,
    // });
    // return {
    //   ...toRefs(state),
    // };

    // const name = ref("Lee");
    // const age = ref<number | string>(24);
    // return { name, age };

    const jobs = ref<Job[]>([
      { title: "farm worker", location: "My Khe", salary: 3000, id: "1" },
      { title: "quarryman", location: "Da Nang", salary: 4000, id: "2" },
      { title: "flute player", location: "Hoi An", salary: 5000, id: "3" },
      { title: "fisherman", location: "Tam ky", salary: 6500, id: "4" },
      { title: "lawer", location: "Hue", salary: 6000, id: "5" },
      { title: "prison guard", location: "Quang Ngai", salary: 2000, id: "6" },
    ]);

    const order = ref<OrderTerm>("title");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
  // data() {
  //   return {
  //     name: "Kun",
  //     age: 25 as number | string,
  //   };
  // },
  methods: {
    // changeName(name: string) {
    //   this.name = name;
    //   return name;
    // },
    // changeAge(age: string | number) {
    //   this.age = age;
    //   return age;
    // },
  },
});
</script>

<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
header .title {
  display: flex;
  justify-content: center;
}
header img {
  width: 60px;
  margin-right: 20px;
}
header h1 {
  font-size: 3em;
}
</style>
