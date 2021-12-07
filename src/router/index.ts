import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

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
      { path: "", component: () => import("../components/DocDemo.vue") },
      { path: "switch", component: () => import("../components/Switch.vue") },
      { path: "button", component: () => import("../components/Button.vue") },
      { path: "dialog", component: () => import("../components/Dialog.vue") },
      { path: "tabs", component: () => import("../components/Tabs.vue") },
    ],
  },
];

// 创建一个vue可以使用的路由实例
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
