<template>
  <div>
    <header>
      <h2>Screenshot app</h2>
    </header>
    <main>
      <form @submit.prevent="requestScreenshot">
        <input type="url" name="url" id="url" v-model="url" />
        <input type="submit" value="Take screenshot" />
      </form>
      <a
        v-if="screenshotUrl != ''"
        :href="screenshotUrl"
        target="_blank"
        download=""
      >
        <img :src="screenshotUrl" alt="screenshot" />
      </a>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const url = ref("http://");
    const screenshotUrl = ref("");

    const requestScreenshot = async () => {
      const res = await fetch("http://localhost:5000/screenshot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.value,
        }),
      }).then((data) => {
        return data.json();
      });

      console.log("res ", res);
      screenshotUrl.value = `http://localhost:5000${res.imageAdd}`;
    };

    return {
      url,
      screenshotUrl,
      requestScreenshot,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  display: block;
  width: 700px;
  max-width: 100%;
  margin: 30px auto;
}
</style>
