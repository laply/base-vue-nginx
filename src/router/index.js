import Vue from "vue";
import App from "../App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = { template: "<div>Login Page</div>" };
const NotFound = { template: "<div>Not Found</div>" };

const routes = [
  { path: "/", component: App },
  { path: "/login", component: Login },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  routes,
});

export default router;
