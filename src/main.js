import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/app.scss";

import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
