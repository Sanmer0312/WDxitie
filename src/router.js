import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import model from "./views/model.vue";
import login from "./views/login.vue";
import xitieCase from "./views/case.vue";
import error from "./views/404.vue";
import teach from "./views/teach.vue";
import xitieVideo from "./views/video.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "主页面",
      redirect: "/home"
    },
    {
      path: "*",
      component: error
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/model",
      name: "model",
      component: model
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/case",
      name: "case",
      component: xitieCase
    },
    {
      path: "/teach",
      name: "teach",
      component: teach
    },
    {
      path: "/video",
      name: "xitie-video",
      component: xitieVideo
    }
  ]
});
