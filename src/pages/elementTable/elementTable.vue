<template>
  <div class="element-table">
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
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
import tableDate from '@/store/tableList/tableList.json'
export default {
  name: 'element-table',
  data () {
    return {
      tableData: [],
      selectDate: [],
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
      this.pages.totle = tableDate.data.length
      let pageStart = (this.pages.pageNum - 1) * this.pages.pageSize
      for (let i = pageStart; i < pageStart + this.pages.pageSize; i++) {
        this.tableData.push(tableDate.data[i])
      }
    },
    handleSelectionChange (val) {
      this.selectDate = []
      val.forEach(item => {
        this.selectDate.push({
          id: item.id
        })
      })
    },
    handleCurrentChange (val) {
      this.pages.pageNum = val
      this.loadData()
    },
    onSubmit () {
      console.log(this.selectDate)
    }
  },
  watch: {}
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
</style>
