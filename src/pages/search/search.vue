<template>
  <div id="app">
    <input v-model='search' />
    <ul v-if="searchData.length > 0">
      <li v-for="(item, index) in searchData" :key="index">{{item.name}},价格:￥{{item.price}}</li>
    </ul>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      products: [{
        name: '苹果',
        price: 25,
        category: '水果'
      }, {
        name: '香蕉',
        price: 15,
        category: '水果'
      }, {
        name: '雪梨',
        price: 65,
        category: '水果'
      }, {
        name: '宝马',
        price: 2500,
        category: '汽车'
      }, {
        name: '奔驰',
        price: 10025,
        category: '汽车'
      }, {
        name: '柑橘',
        price: 15,
        category: '水果'
      }, {
        name: '奥迪',
        price: 25,
        category: '汽车'
      }]
    }
  },
  computed: {
    searchData () {
      let search = this.search
      if (search) {
        return this.products.filter(product => {
          return Object.keys(product).some(key => {
            return String(product[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.products
    }
  }
}
</script>
