<template>
  <div id="app">
    Home

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
export default {
  name: "HomePage",
  components: {},
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
