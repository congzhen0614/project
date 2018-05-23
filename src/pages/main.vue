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
        router: '/select',
        title: 'select(多级联动)'
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
  }
</style>
