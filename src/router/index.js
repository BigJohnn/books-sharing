import Vue from 'vue'
import Router from 'vue-router'
import LongLife from '@/components/LongLife'
import JustKeepBuying from '@/components/JustKeepBuying'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
