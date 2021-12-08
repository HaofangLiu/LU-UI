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
      { path: "switch", component: () => import("../components/SwitchDemo.vue") },
      { path: "button", component: () => import("../components/ButtonDemo.vue") },
      { path: "dialog", component: () => import("../components/DialogDemo.vue") },
      { path: "tabs", component: () => import("../components/TabDemo.vue") },
    ],
  },
];

// 创建一个vue可以使用的路由实例
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
