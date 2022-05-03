import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.scss";
import "./lib/index.scss";
import "github-markdown-css/github-markdown-light.css";
import MarkdownComponent from "./components/MarkdownComponent.vue";

const app = createApp(App);
app.use(router);
app.component("MarkdownComponent", MarkdownComponent);
app.mount("#app");
