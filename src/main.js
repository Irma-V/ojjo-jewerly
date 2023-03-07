import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/scss/style.scss";
import router from "./router";
import VueAgile from 'vue-agile'

// // vue bootstrap
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.use(router);
app.use(VueAgile)

app.mount('#app');

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)