<template>
  <div class="header">
    <img src="./goBack.png" @click="clickGoBack()" />
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  methods: {
    clickGoBack () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style>
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9;
  width: 100%;
  height: 50px;
  text-align: left;
  background-color: #F8BD48;
}
.header img {
  width: 30px;
  height: 30px;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: -40px;
}
.header p {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
</style>
