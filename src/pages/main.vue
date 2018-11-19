<template>
  <div id="main">
    <ul class="main-nav">
      <li v-for="(item, index) in menu" :key="index">
        <router-link :to="item.router">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [{
        router: '/scroll',
        title: 'scroll(BScroll插件)'
      }, {
        router: '/component',
        title: 'component(component切换组件)'
      }, {
        router: '/geogPosition',
        title: 'geogPosition(获取地理位置-百度地图api)'
      }, {
        router: '/lazyLoad',
        title: 'vue懒加载'
      }, {
        router: '/shopcar',
        title: 'shoppingcar(购物车)'
      }, {
        router: '/saveState',
        title: 'saveState(储存状态)'
      }, {
        router: '/upLoadImages',
        title: 'upLoadImages(上传图片)'
      }, {
        router: '/qrcode',
        title: 'qrcode生成二维码'
      }, {
        router: '/images',
        title: 'images平铺'
      }, {
        router: '/emit',
        title: 'emit参数传递'
      }, {
        router: '/elementTable',
        title: 'element表格'
      }, {
        router: '/elementMenu',
        title: 'element菜单'
      }, {
        router: '/elementTab',
        title: 'elementTabs'
      }, {
        router: '/play',
        title: '播放器'
      }]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style>
  .main-nav li {
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
</style>
