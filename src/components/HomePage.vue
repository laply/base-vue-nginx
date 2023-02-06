<template>
  <div id="app">
    Home

    <div v-if="loading">Page Loading ~</div>
    <div v-else-if="err !== undefined">{{ err }}</div>
    <div v-else>
      api = {{ apiRes }}
      <!-- <div v-for="board in boards" :key="board.id">
        <router-link :to="'/b/' + board.id">{{ board.name }}</router-link>
      </div> -->
    </div>
    <ul>
      <li>
        <router-link to="/b/1">Board 1</router-link>
      </li>
      <li>
        <router-link to="/b/2">Board 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return { loading: false, apiRes: "" };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: {
      handler: "fetchData()",
      immediate: true,
    },
  },
  methods: {
    fetchData() {
      this.loading = true;

      axios
        .get("http://localhost:3000/Health", {
          headers: {
            "Content-Type": "application/json",
          },
          param: {},
        })
        .then((res) => {
          this.loading = false;
          this.apiRes = res.data;
        })
        .catch((res) => {
          this.loading = false;
          this.err = res.response.data;
        })
        .finally(function () {});
    },
    fetchDataXml() {
      this.loading = true;

      let req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/Health", true);
      req.send();

      req.addEventListener("load", () => {
        this.loading = false;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.responseText),
        };
      });
    },
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
</style>
