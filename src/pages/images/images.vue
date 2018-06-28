<template>
  <div class="images">
    <v-head :title="title"></v-head>
    <ul>
      <li v-for="(item, index) in listData" :key="index">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>乘积:{{ item.arr | multiplication }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import head from '@/components/header/head'
export default {
  components: {
    'v-head': head
  },
  data () {
    return {
      title: 'images平铺',
      listData: [{
        name: '张三',
        id: '1',
        arr: '[1, 2, 3]'
      }, {
        name: '李四',
        id: '2',
        arr: '[4, 5, 6]'
      }, {
        name: '王五',
        id: '3',
        arr: '[7, 8, 9]'
      }]
    }
  },
  filters: {
    multiplication (val) {
      let arr = JSON.parse(val)
      return arr[0] * arr[1] * arr[2]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
  .images-list {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #E6E6E6;
  }
  .images {
    padding-top: 50px;
  }
</style>
