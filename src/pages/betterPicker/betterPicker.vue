<template>
  <div class="better-picker">
    <span class="address" @click="clickSelect">{{ addressStr || '请选择省/市/区' }}</span>
  </div>
</template>

<script>
import area from '../../../static/data/area.json'
import Picker from 'better-picker'
export default {
  name: 'better-picker',
  data () {
    return {
      tempIndex: [0, 0, 0],
      area: area.result,
      form: {
        provinceId: '',
        cityId: '',
        regionId: ''
      },
      address: {
        provinceName: '',
        cityName: '',
        regionName: ''
      },
      picker: ''
    }
  },
  mounted () {
    // 初始化选择器
    this.picker = new Picker({
      data: this.linkageData,
      selectedIndex: [0, 0, 0],
      title: '请选择地区'
    })
    // 选中
    this.picker.on('picker.select', (selectedVal, selectedIndex) => {
      this.form.cityId = selectedVal[1]
      this.form.provinceId = selectedVal[0]
      this.form.regionId = selectedVal[2]
      this.address.provinceName = this.linkageData[0][selectedIndex[0]].text
      this.address.cityName = this.linkageData[1][selectedIndex[1]].text
      this.address.regionName = this.linkageData[2][selectedIndex[2]].text
    })
    // 改变
    this.picker.on('picker.change', (index, selectedIndex) => {
      this.tempIndex[index] = selectedIndex
      if (index > 1) return
      if (index === 0) {
        this.tempIndex = [selectedIndex, 0, 0]
      } else {
        this.tempIndex = [this.tempIndex[0], selectedIndex, this.tempIndex[2]]
      }
      this.picker.refill(this.linkageData)
    })
  },
  computed: {
    // 动态城市选择数据
    linkageData () {
      let provinces = []
      let cities = []
      let areas = []
      this.area.forEach(item => {
        // console.log(item)
        provinces.push({
          text: item.provincename,
          value: item.provinceid
        })
      })
      this.area[this.tempIndex[0]].citylist.forEach(item => {
        // console.log(item)
        cities.push({
          text: item.cityname,
          value: item.cityid
        })
      })
      this.area[this.tempIndex[0]].citylist[this.tempIndex[1]].regionlist.forEach(item => {
        // console.log(item)
        areas.push({
          text: item.regionname,
          value: item.regionid
        })
      })
      return [provinces, cities, areas]
    },
    addressStr () {
      if (this.address.regionName === '') {
        return ''
      } else {
        return this.address.provinceName + ',' + this.address.cityName + ',' + this.address.regionName
      }
    }
  },
  methods: {
    clickSelect () {
      this.picker.show()
    }
  },
  watch: {}
}
</script>

<style>
  .better-picker .address {
    display: block;
    color: #c7c7cc;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20px;
    text-align: right;
  }
</style>
