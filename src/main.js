import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/routes";
import App from "./App.vue";
import "./assets/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).use(VueAxios, axios).mount("#app");
