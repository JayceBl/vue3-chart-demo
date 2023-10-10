import { createApp } from "vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useMqttStore } from "@/stores/mqtt";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const mqttStore = useMqttStore(pinia); // 使用 MQTT store

app.use(router);

app.mount("#app");
