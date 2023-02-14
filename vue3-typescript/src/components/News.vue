<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="!data">
      <h3>Loading...</h3>
    </div>
    <div v-else>
      <!-- <h3>News : {{ data.data.totalResults }}</h3> -->
      <div>
        <ul>
          <li v-for="article in data.data.articles" :key="article.title">
            {{ article.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFetch } from "@/composables/fetch.ts";

export default defineComponent({
  name: "News",
  props: {
    msg: String,
  },
  setup() {
    const { data, error } = useFetch("http://localhost:5000/api/v1/news");
    return { data, error };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
