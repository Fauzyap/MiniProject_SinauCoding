import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "auth.login",
    component: () => import("../views/auth/login.vue"),
  },
  {
    path: "/regist",
    name: "auth.register",
    component: () => import("../views/auth/register.vue"),
  },
  {
    path: "/indexbar",
    name: "dashboard",
    component: () => import("../views/barang/dash.vue"),
  },
  {
    path: "/indexsup",
    name: "indexsup",
    component: () => import("../views/supplier/index.vue"),
  },
  {
    path: "/createbar",
    name: "createbar",
    component: () => import("../views/barang/create.vue"),
  },
  {
    path: "/createsup",
    name: "createsup",
    component: () => import("../views/supplier/create.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
