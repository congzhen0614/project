<template>
  <div class="element-tab">
    <el-tabs editable type="border-card" v-model="activeName" @tab-click="handleClick" @edit="handleTabsEdit">
      <el-tab-pane :label="item.name" :name="item.path" v-for="item in menu" :key="item.path"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'element-tab',
  data () {
    return {
      activeName: '/index1',
      menu: [{
        path: '/index1',
        name: '杂志管理'
      }, {
        path: '/index2',
        name: '新增杂志'
      }, {
        path: '/index3',
        name: '修改杂志'
      }, {
        path: '/index4',
        name: '删除杂志'
      }]
    }
  },
  methods: {
    handleClick (tab) {
      console.log(tab.name)
    },
    handleTabsEdit (targetName) {
      this.menu.forEach((item, index) => {
        if (item.path === targetName) {
          this.menu.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style>
  .el-tabs__content {
    display: none;
  }
</style>
