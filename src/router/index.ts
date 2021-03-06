import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "@/firebase";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/add",
    name: "Add",
    component: () => import(/* webpackChunkName: "add" */ "../views/Add.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/Setting.vue")
  },
  {
    path: "/*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to.name);
  if (to.name == "Home" || to.name == "Add" || to.name == "Setting") {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next("/signup");
      }
    });
  } else if (to.name == "SignUp") {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next("/");
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;
