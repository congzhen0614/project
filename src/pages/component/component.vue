<template>
  <div class="component">
    <v-head></v-head>
    <nav-list @navIndex="navIndex"></nav-list>
    <transition-group enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
    <!-- 过渡效果 -->
      <component :key="clickType" :is="nowContent" :navIndex="clickType"></component>
      <!-- component 切换组件，:is='组件内容' -->
    </transition-group>
  </div>
</template>

<script>
import head from '@/components/header/head'
import navList from './navList/navList.vue'
import contentList from './contentList/list'
export default {
  components: {
    'v-head': head,
    'nav-list': navList,
    'content-list': contentList
  },
  data () {
    return {
      cutComponent: ['content-list', 'content-list', 'content-list', 'content-list', 'content-list'],
      clickType: '0'
    }
  },
  computed: {
    // 当前视图
    nowContent () {
      return this.cutComponent[this.clickType]
    }
  },
  methods: {
    navIndex (cls) {
      this.clickType = cls
    }
  }
}
</script>

<style>
  .component {
    padding-top: 50px;
  }
</style>
