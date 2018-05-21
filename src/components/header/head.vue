<template>
  <div class="header">
    <img src="./goBack.png" @click="clickGoBack()" />
  </div>
</template>
<script>
export default {
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
  background-color: #FCFAF8;
}
.header img {
  width: 50px;
  height: 50px;
}
</style>
