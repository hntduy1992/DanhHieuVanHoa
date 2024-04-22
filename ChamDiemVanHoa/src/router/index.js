import { createRouter, createWebHistory } from "vue-router";

import DangNhapPage from "../pages/DangNhapPage.vue";

const routes = [
  {
    path: "/dang-nhap",
    component: DangNhapPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
