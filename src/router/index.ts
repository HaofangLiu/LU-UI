import { h } from "vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import MarkdownComponent from "../components/MarkdownComponent.vue";
import docmd from "../md/doc.md";
import getStart from "../md/getStart.md";


const retriveMarkdown = (content: string) =>
  h(MarkdownComponent, { content: content, key: content });

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/doc",
    name: "doc",
    component: () => import("../views/doc.vue"),
    children: [
      { path: "", component: retriveMarkdown(docmd) }, // intro
      { path: "getStart", component: retriveMarkdown(getStart) }, // getstart

      {
        path: "switch",
        component: () => import("../components/Switch/SwitchDemo.vue"),
      },
      {
        path: "button",
        component: () => import("../components/Button/ButtonDemo.vue"),
      },
      {
        path: "dialog",
        component: () => import("../components/Dialog/DialogDemo.vue"),
      },
      { path: "tabs", component: () => import("../components/Tabs/TabDemo.vue") },
    ],
  },
];

// 创建一个vue可以使用的路由实例
const router = createRouter({
  routes,
  history: createWebHashHistory('/LU-UI/'),
});

export default router;
