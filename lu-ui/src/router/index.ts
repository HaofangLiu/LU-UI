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
      { path: "switch", component: () => import("../components/Switch.vue") },
    ],
  },
];

// 创建一个vue可以使用的路由实例
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
