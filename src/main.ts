import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.scss";
import "./lib/index.scss";
import "github-markdown-css/github-markdown-light.css"


createApp(App).use(router).mount("#app");
