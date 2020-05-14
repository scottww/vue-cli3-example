import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/home",
    component: () => import("@/views/Home"),
  },
];

const router = new Router({
  routes,
  // mode: 'history',
});

//路由钩子函数
// router.beforeEach(async (to, from, next) => {
//   next();
// });

export default router;
