import Vue from 'vue'
import Router from 'vue-router'
// 获取组件
import main from '@/pages/main'
import scroll from '@/pages/scroll/scroll'
import component from '@/pages/component/component'
import geogPosition from '@/pages/position/position'
import lazyLoad from '@/pages/lazyLoad/lazyLoad'
import shopcar from '@/pages/shopcar/shopcar'
import saveState from '@/pages/saveState/saveState'
import other from '@/pages/saveState/other/other'
import upLoadImages from '@/pages/upLoadImages/upLoadImages'
import qrcode from '@/pages/qrcode/qrcode'
import images from '@/pages/images/images'
import emit from '@/pages/emit/emit'
import remarks from '@/pages/emit/remarks/remarks'
import elementTable from '@/pages/elementTable/elementTable.vue'

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
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/saveState',
      name: 'saveState',
      component: saveState
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/upLoadImages',
      name: 'upLoadImages',
      component: upLoadImages
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
    },
    {
      path: '/images',
      name: 'images',
      component: images
    }, {
      path: '/emit',
      name: 'emit',
      component: emit
    }, {
      path: '/remarks',
      name: 'remarks',
      component: remarks
    }, {
      path: '/elementTable',
      name: 'elementTable',
      component: elementTable
    }
  ]
})
