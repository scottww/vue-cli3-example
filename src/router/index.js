import Vue from "vue";
import Router from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import(),
  },
  {
    path: "/home",
    component: () => import(),
  },
];
const router = new Router({
  routes,
  // mode: 'history',
});
//路由钩子函数
router.beforeEach(async (to, from, next) => {});
export default router;
