/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views";
import About from "@/views/about/";
import Services from "@/views/services/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
