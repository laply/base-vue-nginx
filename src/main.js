import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "./assets/app.scss";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
