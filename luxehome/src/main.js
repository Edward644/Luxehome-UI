import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "@/assets/styles/main.css";

const app = createApp(App);

import api from "@/plugins/api";
app.use(api, { http: axios });

import theme from "@/plugins/theme";
app.use(theme, { palette: "dark" });

app.use(router);

app.mount("#app");
