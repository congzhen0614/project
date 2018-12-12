import Vue from 'vue'
import Router from 'vue-router'

// 获取组件
import main from '@/pages/main'
import scroll from '@/pages/scroll/scroll'
import seek from '@/pages/scroll/seek/seek.vue'
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
import elementMenu from '@/pages/elementMenu/elementMenu.vue'
import elementTab from '@/pages/elementTab/elementTab.vue'
import pay from '@/pages/play/play.vue'
import elementDate from '@/pages/elementDate/elementDate.vue'
import betterPicker from '@/pages/betterPicker/betterPicker.vue'
import enter from '@/pages/enter/enter.vue'
import shiftSelect from '@/pages/shiftSelect/shiftSelect.vue'
import array from '@/pages/array/array.vue'

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
    }, {
      path: '/elementMenu',
      name: 'elementMenu',
      component: elementMenu
    }, {
      path: '/elementTab',
      name: 'elementTab',
      component: elementTab
    }, {
      path: '/play',
      name: 'play',
      component: pay
    }, {
      path: '/elementDate',
      name: 'elementDate',
      component: elementDate
    }, {
      path: '/betterPicker',
      name: 'betterPicker',
      component: betterPicker
    }, {
      path: '/enter',
      name: 'enter',
      component: enter
    }, {
      path: '/seek',
      name: 'seek',
      component: seek
    }, {
      path: '/shiftSelect',
      name: 'shiftSelect',
      component: shiftSelect
    }, {
      path: '/array',
      name: 'array',
      component: array
    }
  ]
})
