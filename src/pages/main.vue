<template>
  <div id="main">
    <ul class="main-nav">
      <li>
        <router-link to="/scroll">scroll(BScroll插件)</router-link>
      </li>
      <li>
        <router-link to="/component">component(component切换组件)</router-link>
      </li>
      <li>
        <router-link to="/geogPosition">geogPosition(获取地理位置-百度地图api)</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
  .main-nav li {
    height: 36px;
    line-height: 36px;
  }
</style>
