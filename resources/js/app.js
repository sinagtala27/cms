import { createApp } from 'vue';
import "tw-elements";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
// mouting point for the whole app

import App from "./App.vue";
import router from './router';



createApp(App).use(router).mount("#app");