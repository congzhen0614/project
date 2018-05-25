<template>
  <div class="saveState">
    <v-head :title="title"></v-head>
    <div class="saveContent">
      <div class="save-state">
        <p>请选择状态(单选)：</p>
        <ul>
          <li v-for="(item, index) in state1" @click="clickRadio(item.id)" :key="index" :class="{activity: type1 == item.id}">{{ item.name }}</li>
        </ul>
      </div>
      <div class="save-state">
        <p>请选择状态(复选)：</p>
        <ul>
          <li v-for="(item, index) in state2" @click="clickCheck(item.id)" :key="index" :class="{activity: type2.toString().indexOf(item.id)>-1}">{{ item.name }}</li>
        </ul>
      </div>
    </div>
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
      title: 'saveState(储存状态)',
      state1: [{ name: '状态1', id: '1' }, { name: '状态2', id: '2' }, { name: '状态3', id: '3' }],
      state2: [{ name: '状态4', id: '4' }, { name: '状态5', id: '5' }, { name: '状态6', id: '6' }],
      type1: '',
      type2: []
    }
  },
  mounted () {},
  methods: {
    clickRadio (type) {
      this.type1 = type
    },
    clickCheck (type) {
      if (!this.type2.length) {
        this.type2.push(type)
      } else {
        this.type2.forEach((item, index) => {
          if (item === type) {
            this.type2.splice(index, 1)
          } else {
            this.type2.push(type)
          }
        })
      }
    }
  }
}
</script>

<style>
  .saveState {
    margin-top: 50px;
  }
  .save-state p {
    padding: 10px 15px;
  }
  .save-state ul {
    display: flex;
    justify-content: space-around;
    overflow: hidden;
  }
  .save-state ul li {
    width: 55px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    float: left;
    border: 1px solid #333;
    color: #333;
  }
  .save-state .activity {
    color: #F8BD48;
    border: 1px solid #F8BD48;
  }
</style>
