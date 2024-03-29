import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/AboutPage'
    },
    {
      path: '/LongLife',
      name: 'LongLife',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LongLife.vue"),
    },
    {
      path: '/JustKeepBuying',
      name: 'JustKeepBuying',
      component: () => import("../views/JustKeepBuying.vue"),
    },
    {
      path: '/OpenCL',
      name: 'OpenCL',
      component: () => import("../views/OpenCL.vue"),
    },
    {
      path: '/AboutPage',
      name: 'AboutPage',
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: '/ConsumerPsychology',
      name: 'ConsumerPsychology',
      component: () => import("../views/ConsumerPsychology.vue"),
    },
    {
      path: '/DruckerSayingOnIndividuals',
      name: 'DruckerSayingOnIndividuals',
      component: () => import("../views/DruckerSayingOnIndividuals.vue"),
    }
  ]
})

export default router
