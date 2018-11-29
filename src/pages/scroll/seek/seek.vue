<template>
  <div class="main-seek">
    <span class="go-back" @click="clickGoBack">返回</span>
    <div class="seek-input">
      <div class="seek-input-title" @click="selectOpen = !selectOpen">
        <span>{{ selectTitle || '刊物' }}</span>
        <img v-if="!selectOpen" src="./close-icon.png"/>
        <img v-if="selectOpen" src="./open-icon.png"/>
      </div>
      <div class="seek-input-content">
        <input type="text" :value="selectVal" placeholder="请输入搜索内容">
        <img @click="clickSeek" src="../seek-icon.png">
      </div>
      <ul class="seek-input-title-content" v-if="selectOpen">
        <li @click="clickSelectTitle('刊物')">刊物</li>
        <li @click="clickSelectTitle('图书')">图书</li>
        <li @click="clickSelectTitle('电子读物')">电子读物</li>
      </ul>
    </div>
    <div class="seek-history">
      <div class="seek-history-title">
        <img src="../seek-history-icon.png"/>
        <span>搜索历史</span>
      </div>
      <ul class="seek-history-content">
        <li>小学英语同步阅读 六年级上册</li>
        <li>痕迹大探案</li>
        <li>微校童书套餐</li>
        <li>世界真好</li>
        <li>妈妈做自己，孩子就能做自己</li>
        <li>动物绝对不应该穿衣服</li>
        <li>罗伯生气了</li>
        <li>和爸爸一起散步</li>
        <li>小淘气尼古拉的故事</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seek',
  components: {},
  data () {
    return {
      selectOpen: false,
      selectVal: '',
      selectTitle: ''
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {},
  methods: {
    clickGoBack () {
      this.$router.go(-1)
    },
    clickSelectTitle (title) {
      this.selectTitle = title
      this.selectOpen = false
    },
    clickSeek () {
      console.log('搜索')
    }
  },
  watch: {}
}
</script>

<style>
  .main-seek {
    overflow: hidden;
    padding: 10px;
  }
  .go-back {
    background-color: #A1D366;
    border-radius: 28px;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    color: #FFFFFF;
    display: block;
    height: 28px;
    width: 48px;
  }
  .seek-input {
    margin-top: 20px;
  }
  .seek-input-title {
    border-radius: 34px 0 0 34px;
    background-color: #F8BD48;
    padding-right: 10px;
    line-height: 34px;
    height: 34px;
    float: left;
  }
  .seek-input-title span {
    color: #333333;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
    margin-right: 2px;
  }
  .seek-input-title img {
    width: 10px;
    height: 10px;
    vertical-align: middle;
  }
  .seek-input-content {
    border-radius: 34px;
    background-color: #F3F4F5;
    height: 34px;
  }
  .seek-input-content input {
    background-color: #F3F4F5;
    line-height: 30px;
    margin-left: 10px;
    font-size: 14px;
    color: #C6C6C6;
    outline: none;
    border: none;
    height: 32px;
  }
  .seek-input-content input::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 14px;
  }
  .seek-input-content img {
    float: right;
    width: 18px;
    height: 18px;
    margin-top: 7px;
    margin-right: 15px;
  }
  .seek-input-title-content {
    position: absolute;
    top: 90px;
    left: 10px;
    width: 120px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .seek-input-title-content li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #D6D6D6;
  }
  .seek-input-title-content li:last-child {
    border: none;
  }
  .seek-input-title-content:after {
    content: "";
    top: -6px;
    width: 0;
    height: 0;
    left: 20px;
    display: block;
    border-width: 6px;
    position: absolute;
    border-style: solid;
    border-top-width: 0;
    border-color: transparent;
    border-bottom-color: #fff;
  }
  .seek-history-title {
    margin-top: 50px;
  }
  .seek-history-title img {
    width: 14px;
    height: 18px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .seek-history-title span {
    vertical-align: middle;
    display: inline-block;
    font-size: 18px;
    color: #999999;
  }
  .seek-history-content {
    overflow: hidden;
    padding: 5px 10px;
  }
  .seek-history-content li {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #333333;
    background-color: #F8F7F6;
    padding: 0 10px;
    border-radius: 30px;
    float: left;
    margin-top: 5px;
    margin-right: 5px;
  }
</style>
