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
      <span class="click-btn" @click="clickToOtherPage()">提交</span>
    </div>
  </div>
</template>

<script>
import head from '@/components/header/head'
import state from '@/store/state/state'
export default {
  components: {
    'v-head': head
  },
  data () {
    return {
      title: 'saveState(储存状态)',
      state1: [{ name: '状态1', id: '1' }, { name: '状态2', id: '2' }, { name: '状态3', id: '3' }],
      state2: [{ name: '状态4', id: '4' }, { name: '状态5', id: '5' }, { name: '状态6', id: '6' }],
      type1: state.type1,
      type2: state.type2
    }
  },
  mounted () {},
  methods: {
    clickRadio (type) {
      this.type1 = state.type1 = type // 为什么不能自己绑定
    },
    clickCheck (type) {
      if (this.type2.toString().indexOf(type) > -1) {
        state.type2 = this.type2.toString().replace(type, '').split(',')
      } else {
        state.type2.push(type)
      }
    },
    clickToOtherPage () {
      this.$router.push({
        path: '/other',
        query: {
          'type1': this.type1,
          'type2': this.type2
        }
      })
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
  .click-btn {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 200px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 16px;
    border-radius: 36px;
    background-color: #F8BD48;
    color: #fff;
  }
</style>
