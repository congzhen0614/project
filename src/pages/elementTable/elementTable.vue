<template>
  <div class="element-table">
    <el-button style="margin-bottom: 10px" size="mini" type="primary" @click="loadData">检索</el-button>
    <el-table ref="multipleTable" :data="tableData" border @select="handleSelect" @select-all="handleSelect">
      <el-table-column type="selection" width="45" align="center"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pages.pageNum"
      :page-size="pages.pageSize"
      :total="pages.totle"
      layout="total, prev, pager, next">
    </el-pagination>
    <el-button size="mini" type="primary" @click="onSubmit">保存提交</el-button>
  </div>
</template>

<script>
import tableData from '@/store/tableList/tableList.json'
export default {
  name: 'element-table',
  data () {
    return {
      tableData: [],
      selectData: [],
      historyData: [],
      form: {},
      pages: {
        pageNum: 1,
        pageSize: 10,
        totle: 0
      }
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.tableData = []
      this.pages.totle = tableData.data.length
      let pageStart = (this.pages.pageNum - 1) * this.pages.pageSize
      for (let i = pageStart; i < pageStart + this.pages.pageSize; i++) {
        this.tableData.push(tableData.data[i])
      }
      this.$nextTick(() => {
        if (typeof this.historyData[this.pages.pageNum] !== 'undefined') {
          for (let i = 0; i < this.tableData.length; i++) {
            this.historyData[this.pages.pageNum].forEach(item => {
              if (item.id === this.tableData[i].id) {
                this.$refs.multipleTable.toggleRowSelection(this.tableData[i], true)
              }
            })
          }
        }
      })
    },
    handleSelect (val) {
      this.selectData = []
      this.historyData[this.pages.pageNum] = val
      this.historyData.forEach(item => {
        this.selectData = this.selectData.concat(item)
      })
    },
    handleCurrentChange (val) {
      this.pages.pageNum = val
      this.loadData()
    },
    onSubmit () {
      console.log(this.selectData)
    }
  },
  watch: {
    selectData (val) {
      console.log(val)
    }
  }
}
</script>

<style>
  .element-table {
    width: 700px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .element-table .el-table .cell {
    font-size: 14px;
  }
  .element-table .el-table td, .element-table .el-table th {
    padding: 5px 0;
  }
  .element-table .el-input {
    font-size: 12px;
  }
  .element-table .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .element-table .el-form-item__label {
    font-size: 12px;
  }
</style>
