<template>
  <div class="shift-select">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="年级类型：">
        <el-checkbox-group v-model="form.ageId"><!-- click.native -->
          <el-checkbox :label="item.id" v-for="(item, index) in ageList" :key="item.id" @click.native="onSelectClick(index)" @change="onSelectChange">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'shift-select',
  data () {
    return {
      ageList: [
        {id: 70, name: '1年级', cls: '1', clsName: '杂志', ord: 1},
        {id: 67, name: '2年级', cls: '1', clsName: '杂志', ord: 2},
        {id: 14, name: '3年级', cls: '1', clsName: '杂志', ord: 3},
        {id: 13, name: '4年级', cls: '1', clsName: '杂志', ord: 4},
        {id: 12, name: '5年级', cls: '1', clsName: '杂志', ord: 5},
        {id: 11, name: '6年级', cls: '1', clsName: '杂志', ord: 6},
        {id: 10, name: '7年级', cls: '1', clsName: '杂志', ord: 7},
        {id: 66, name: '8年级', cls: '1', clsName: '杂志', ord: 8},
        {id: 65, name: '9年级', cls: '1', clsName: '杂志', ord: 9},
        {id: 64, name: '小班', cls: '1', clsName: '杂志', ord: 10},
        {id: 63, name: '中班', cls: '1', clsName: '杂志', ord: 11},
        {id: 69, name: '大班', cls: '1', clsName: '杂志', ord: 12}
      ],
      form: {
        ageId: []
      }
    }
  },
  methods: {
    onSelectClick (index) {
      const event = window.event
      const that = this
      let indexArr = []
      if (event.shiftKey) {
        if (event.target.type === 'checkbox') {
          setTimeout(() => {
            indexArr = that.form.ageId.map(item => {
              let objIndex = ''
              that.ageList.forEach((obj, index) => {
                if (obj.id === item) {
                  objIndex = index
                }
              })
              return objIndex
            })
            let indexMin = Math.min(...indexArr)
            let indexMax = 0
            if (that.form.ageId.length > 0) {
              indexMax = index
            } else {
              indexMax = Math.max(...indexArr)
            }
            for (var i = indexMin; i < indexMax; i++) {
              let selected = false
              that.form.ageId.forEach(item => {
                if (item === that.ageList[i].id) {
                  selected = true
                }
              })
              if (!selected) {
                that.form.ageId.push(that.ageList[i].id)
              }
            }
          }, 10)
        }
      }
    },
    onSelectChange (val) {
      this.form.ageId.forEach((item, index) => {
        if (item === val) {
          this.form.ageId.splice(index, 1)
        }
      })
    },
    onSubmit () {
      console.log(this.form.ageId)
    }
  },
  watch: {
    'form.ageId' (val) {
      // console.log(val)
    }
  }
}
</script>

<style>
</style>
