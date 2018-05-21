<template>
  <div class='navList'>
    <ul class="nav">
      <li v-for="(item, index) in navList" @click="clickCut(item.cls)" :class="{activity: item.cls==thisCls}" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [{
        name: '全部',
        cls: '0'
      }, {
        name: '待付款',
        cls: '1'
      }, {
        name: '待收货',
        cls: '2'
      }, {
        name: '已收货',
        cls: '3'
      }, {
        name: '退款',
        cls: '4'
      }],
      thisCls: 0
    }
  },
  methods: {
    clickCut (cls) {
      this.thisCls = cls
      this.$emit('navIndex', cls)
    }
  }
}
</script>

<style>
  .nav {
    display: flex;
    height: 36px;
    line-height: 36px;
  }
  .nav li {
      flex: 1;
      text-align: center;
  }
  .nav .activity {
    color: #F8BD48;
    border-bottom: 2px solid #F8BD48;
  }
</style>
