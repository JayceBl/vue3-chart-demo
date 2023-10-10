import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import NotFound1 from "../views/NotFound1.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "page1",
        name: "Page1",
        component: () => import("@/views/Page1.vue"),
      },
      {
        path: "page2",
        name: "Page2",
        component: () => import("@/views/Page2.vue"),
      },
      {
        path: "page3",
        name: "Page3",
        component: () => import("@/views/Page3.vue"),
      },
      {
        path: "page4",
        name: "Page4",
        component: () => import("@/views/Page4.vue"),
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
