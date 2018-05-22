<template>
  <div id="content">
    <v-head :title="title"></v-head>
    <div class="wrapper" ref="wrapper" :style="displayerHeight">
      <ul class="content" ref="content">
        <li class="content-list" v-for="item in data" :key="item.id">{{item.item}}</li>
      </ul>
    </div> <img class="to-top-icon" v-show="toTop" src="./toTop.png" @click="clickToTop()" /> </div>
</template>
<script>
import BScroll from 'better-scroll'
import head from '@/components/header/head'
export default {
  components: {
    'v-head': head
  },
  data () {
    return {
      title: 'scroll',
      displayerHeight: {
        'width': '100%',
        'height': window.innerHeight - 50 + 'px',
        'margin-top': 50 + 'px'
      },
      data: [],
      scroller: '',
      scrollHeight: '',
      loadMore: true,
      reload: true
    }
  },
  computed: {
    toTop () {
      return this.scrollHeight > window.innerHeight
    }
  },
  created () {
    this.setData()
  },
  mounted () {
    this.loadData()
  },
  methods: {
    setData () {
      for (var i = 0; i < 50; i++) {
        this.data.push({
          item: 'content' + i,
          id: i
        })
      }
    },
    loadData () {
      this.$nextTick(() => {
        if (this.scroller === '') {
          this.scroller = new BScroll(this.$refs.wrapper, {
            probeType: 3,
            click: true
          })
          this.listenScroll()
        } else {
          this.scroller.refresh()
        }
      })
    },
    listenScroll () {
      this.scroller.on('scroll', pos => {
        if (pos.y >= 100 && this.reload) {
          console.log('上拉刷新页面!')
          this.reload = false
        }
        this.scrollHeight = -pos.y
      })
    },
    clickToTop () {
      this.scroller.scrollTo(0, 0, 500) // scrollTo(x, y, time)
    }
  },
  watch: {
    scrollHeight (val) { // 下拉到最下面加载更多
      if (val > this.$refs.content.offsetHeight - window.innerHeight && this.loadMore) {
        this.loadMore = false
      }
    }
  }
}
</script>
<style>
.content-list {
  height: 100px;
  line-height: 100px;
}
.to-top-icon {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 10px;
  right: 10px;
  z-index: 9;
}
</style>
