import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/home'),
      children: [
        {
          path: '/article',
          component: () => import('@/views/article')
        },
        {
          path: '/project',
          component: () => import('@/views/project')
        },
        {
          path: '/about',
          component: () => import('@/views/about')
        }
      ]
    }
  ]
})
