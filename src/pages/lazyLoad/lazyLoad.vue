<template>
  <div class="vLazy">
    <v-head :title="title"></v-head>
    <ul>
      <li v-for="item in images" :key="item.index">
        <img v-lazy="item.url" />
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
      title: 'vue懒加载',
      img: require('./avatar.jpg'),
      images: []
    }
  },
  mounted () {
    this.setImages()
  },
  methods: {
    setImages () {
      for (var i = 0; i < 50; i++) {
        this.images.push({
          url: this.img,
          index: i
        })
      }
    }
  }
}
</script>
<style>
.position {
  padding-top: 50px;
}
</style>
