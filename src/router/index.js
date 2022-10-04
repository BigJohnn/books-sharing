import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from "../views/HomeView.vue";
import LongLife from '../views/LongLife.vue'
import JustKeepBuying from '../views/JustKeepBuying.vue'
import OpenCL from '../views/OpenCL.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/LongLife'
    },
    {
      path: '/LongLife',
      name: 'LongLife',
      component: LongLife
    },
    {
      path: '/JustKeepBuying',
      name: 'JustKeepBuying',
      component: JustKeepBuying
    },
    {
      path: '/OpenCL',
      name: 'OpenCL',
      component: OpenCL
    }
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ]
})

export default router
