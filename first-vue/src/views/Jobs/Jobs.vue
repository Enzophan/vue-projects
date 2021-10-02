<template>
  <div>
    <h2>Jobs List</h2>
    <div v-for="(job, index) in jobs" :key="index" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h4>{{ job.title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Jobs",
  setup() {
    const jobs = ref([
      { id: 1, title: "UI/UX Designer" },
      { id: 2, title: "Developer Nodejs" },
      { id: 3, title: "Developer Reactjs" },
    ]);

    return {
      jobs,
    };
  },
};
</script>

<style scoped>
.job h4 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h4:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>