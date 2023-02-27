import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/scss/style.scss";
import router from "./router";
import VueAgile from 'vue-agile'

const app = createApp(App);
app.use(router);
app.use(VueAgile)
app.mount('#app');