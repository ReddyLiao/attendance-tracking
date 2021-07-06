import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/bootstrap.min.css";
import "@/assets/bootstrap.min.js";
import router from "./router/index";
import store from "./store"; // 引入 vuex
import "./index.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
