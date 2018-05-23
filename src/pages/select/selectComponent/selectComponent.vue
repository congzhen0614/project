<template>
  <div class="selectComponent" ref="clickDom">
    <input class="" type="text" @click.stop="clickShowList()" />
    <transition name="fade">
      <ul class="menuList" v-show="showList">
        <li v-for="(item, index) in menu">{{ item.first }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: false,
      menu: [{
        first: '一级菜单'
      }]
    }
  },
  mounted() {},
  methods: {
    clickShowList() {
      this.showList = true
      console.log(this.menu)
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.selectComponent input {
  float: left;
  margin-bottom: 5px;
}
.menuList {
  width: 197px;
  overflow: hidden;
  border: 1px solid #999;
  padding: 10px 0px;
}
</style>
