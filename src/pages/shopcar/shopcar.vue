<template>
  <div id="shoppingcar">
    <v-head :title="title"></v-head>
    <div class="shop-car">
      <div class="shoppingcar-head">
        <div class="check-box" @click="clickCheckAll()">
          <img v-if="!checkAll" :src="check"/>
          <img v-if="checkAll" :src="checkActive"/>
        </div>
        <p>全选</p>
      </div>
      <ul>
        <li v-for="(item, index) in shoppingCarList" :key="index">
          <div class="shoppingcar-content">
            <div class="check-box" @click="clickCheckThis(index)">
              <img v-if="!item.activity" :src="check"/>
              <img v-if="item.activity" :src="checkActive"/>
            </div>
            <div class="check-content">
              <div class="content-images">
                <img :src="item.images"/>
              </div>
              <div class="content-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="content-price">
                <span>￥</span>
                <span class="big">{{ item.price | getInteger}}</span>
                <span>{{ item.price | getDecimal}}</span>
              </div>
              <div class="dispose">
                <div class="sub" @click="clickSubNum(index)">
                  <img src="./reduce_icon.png"/>
                </div>
                <div class="num">{{ item.number }}</div>
                <div class="add" @click="clickAddNum(index)">
                  <img src="./add_icon.png"/>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fotter">
      <div class="settleAccounts">
        <span>总金额：{{ aggregateaAmount }}元</span>
        <div class="settle">结算({{ piece }})</div>
      </div>
    </div>
  </div>
</template>

<script>
import head from '@/components/header/head'
export default {
  name: 'shoppingcar',
  components: {
    'v-head': head
  },
  data () {
    return {
      title: '购物车',
      checkActive: require('./check_active.png'),
      check: require('./check.png'),
      shoppingCarList: [],
      checkAll: false,
      piece: 0,
      aggregateaAmount: 0
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$axios.getShoppingcarList().then(res => {
        this.shoppingCarList = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    clickCheckThis (index) {
      if (!this.shoppingCarList[index].activity) {
        this.piece += parseInt(this.shoppingCarList[index].number)
        this.aggregateaAmount += (parseInt(this.shoppingCarList[index].price) * parseInt(this.shoppingCarList[index].number))
      } else {
        this.piece -= parseInt(this.shoppingCarList[index].number)
        this.aggregateaAmount -= (parseInt(this.shoppingCarList[index].price) * parseInt(this.shoppingCarList[index].number))
      }
      this.shoppingCarList[index].activity = !this.shoppingCarList[index].activity
      this.checkAll = true
      this.shoppingCarList.forEach(item => {
        if (!item.activity) this.checkAll = false
      })
    },
    clickCheckAll () {
      if (!this.checkAll) {
        let that = this
        this.piece = 0
        this.aggregateaAmount = 0
        this.shoppingCarList.forEach(item => {
          if (!item.activity) item.activity = true
          that.piece += parseInt(item.number)
          that.aggregateaAmount += (parseInt(item.number) * parseInt(item.price))
        })
      } else {
        this.shoppingCarList.forEach(item => {
          item.activity = false
        })
        this.piece = 0
        this.aggregateaAmount = 0
      }
      this.checkAll = !this.checkAll
    },
    clickAddNum (index) {
      this.shoppingCarList[index].number = parseInt(this.shoppingCarList[index].number) + 1
      if (this.shoppingCarList[index].activity) {
        this.piece += 1
        this.aggregateaAmount += parseInt(this.shoppingCarList[index].price)
      }
    },
    clickSubNum (index) {
      if (this.shoppingCarList[index].number <= 1) {
        console.log('从购物车移除')
        return
      }
      this.shoppingCarList[index].number = parseInt(this.shoppingCarList[index].number) - 1
      if (this.shoppingCarList[index].activity) {
        this.piece -= 1
        this.aggregateaAmount -= this.shoppingCarList[index].price
      }
    }
  }
}
</script>

<style>
.shop-car {
  margin-top: 50px;
  margin-bottom: 50px;
}
.shoppingcar-head {
  height: 44px;
  line-height: 44px;
}
.shoppingcar-head .check-box {
  padding: 0px 11px;
  float: left;
}
.check-box img {
  display: inline-block;
  vertical-align: middle;
  width: 22px;
  height: 22px;
}
.shoppingcar-head p {
  color: #333;
  font-size: 18px;
  border-bottom: 1px solid #F3F4F5;
}
.shoppingcar-content {
  overflow: hidden;
  padding-top: 15px;
}
.shoppingcar-content .check-box{
  padding: 0px 11px;
  float: left;
}
.check-content {
  padding-bottom: 15px;
  border-bottom: 1px solid #E6E6E6;
  overflow: hidden;
}
.content-images {
  float: left;
  margin-right: 15px;
}
.content-images img {
  width: 80px;
}
.content-title p {
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dispose {
  overflow: hidden;
}
.dispose div {
  float: left;
}
.dispose .add, .dispose .sub {
  width: 22px;
  height: 22px;
}
.dispose .num {
  width: 50px;
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
}
.dispose > div > img {
  width: 22px;
  height: 22px
}
.content-price {
  font-size: 12px;
  margin: 5px 0px;
  color: #F8BD48;
}
.content-price .big {
  font-size: 16px;
}
.settleAccounts {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  border-top: 1px solid #f3f4f5;
  background-color: #fff;
  font-size: 16px;
  line-height: 50px;
  padding-left: 15px;
}
.settleAccounts .settle {
  width: 120px;
  height: 50px;
  text-align: center;
  float: right;
  background-color: #FF5050;
  color: #fff;
}
</style>
