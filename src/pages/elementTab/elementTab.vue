<template>
  <div class="element-tab" @click="onClose">
    <nav class="tab-nav">
      <ul>
        <li :class="{navAct: item === '首页'}" v-for="(item, index) in list" :key="index" @contextmenu.prevent="onMousedown($event, index)">
          <span>{{ item }}</span>
          <i class="el-icon-close"></i>
        </li>
      </ul>
      <div ref="navClose" class="tab-nav-close">
        <p @click="onCloseOther">关闭其他</p>
        <p @click="onCloseAll">关闭全部</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'element-tab',
  data () {
    return {
      list: ['首页', '杂志管理', '年龄管理', '分类管理', '目录表单', '条码管理', '订单管理'],
      closeIndex: 0
    }
  },
  methods: {
    onClose () {
      this.$refs.navClose.style.display = 'none'
    },
    onMousedown (event, index) {
      this.$refs.navClose.style.left = (event.pageX - event.offsetX) + 'px'
      this.$refs.navClose.style.display = 'block'
      this.closeIndex = index
    },
    onCloseOther () {
      let list = []
      list.push(this.list[0])
      list.push(this.list[this.closeIndex])
      this.list = list
    },
    onCloseAll () {
      let list = []
      list.push(this.list[0])
      this.list = list
    }
  }
}
</script>

<style>
  .element-tab {
    height: 100%;
  }
  .tab-nav {
    position: relative;
  }
  .tab-nav ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #f2f6fc;
  }
  .tab-nav li {
    cursor: pointer;
    height: 28px;
    color: #909399;
    padding: 0 5px;
    line-height: 28px;
  }
  .tab-nav li i {
    font-size: 12px;
  }
  .tab-nav li span {
    font-size: 12px;
  }
  .tab-nav .navAct {
    background-color: #FFFFFF;
    color: #409eff;
  }
  .tab-nav li:hover {
    color: #409eff;
  }
  .tab-nav-close {
    position: absolute;
    top: 28px;
    width: 70px;
    display: none;
    font-size: 12px;
    text-align: center;
    background-color: #cccccc;
  }
  .tab-nav-close p {
    cursor: pointer;
    height: 36px;
    line-height: 36px;
  }
</style>
