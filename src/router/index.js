import Vue from 'vue'
import Router from 'vue-router'
// 获取组件
import main from '@/pages/main'
import scroll from '@/pages/scroll/scroll'
import component from '@/pages/component/component'
import geogPosition from '@/pages/position/position'
import lazyLoad from '@/pages/lazyLoad/lazyLoad'
import select from '@/pages/select/select'
Vue.use(Router)
// 设置router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },
    {
      path: '/component',
      name: 'component',
      component: component
    },
    {
      path: '/geogPosition',
      name: 'geogPosition',
      component: geogPosition
    },
    {
      path: '/lazyLoad',
      name: 'lazyLoad',
      component: lazyLoad
    },
    {
      path: '/select',
      name: 'select',
      component: select
    }
  ]
})
