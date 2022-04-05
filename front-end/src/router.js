import Vue from "vue";
import Router from "vue-router";

import LoginPage from "./views/LoginPage.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "Login",
      components: {
        default: LoginPage
      }
    },
    {
      path: "/",
      name: "Dashboard",
      components: {
        default: Dashboard
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      components: {
        default: Dashboard
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
router.beforeEach((to, from, next) => {
  // chuyển đến trang login nếu chưa được login
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = Vue.$cookies.get("accessToken");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
export default router;
