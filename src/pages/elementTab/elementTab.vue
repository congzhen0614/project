<template>
  <div class="element-tab">
    <nav class="tab-nav">
      <ul>
        <li class="navAct" @contextmenu.prevent="onMousedown">
          <span>首页</span>
          <i class="el-icon-close"></i>
        </li>
        <li @contextmenu.prevent="onMousedown">
          <span>杂志管理</span>
          <i class="el-icon-close"></i>
        </li>
        <li @contextmenu.prevent="onMousedown">
          <span>年龄管理</span>
          <i class="el-icon-close"></i>
        </li>
        <li @contextmenu.prevent="onMousedown">
          <span>分类管理</span>
          <i class="el-icon-close"></i>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'element-tab',
  data () {
    return {}
  },
  methods: {
    onMousedown () {
      console.log('点击右键')
    }
  }
}
</script>

<style>
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
</style>
