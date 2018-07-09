<template>
  <div class="emit">
    <v-head :title="title"></v-head>
    <section>
      <p class="remarks" @click="toRemarks()">{{ remarks || '请点击输入留言内容' }}</p>
    </section>
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
      title: 'emit参数传递',
      remarks: ''
    }
  },
  mounted () {
    this.$root.Bus.$on('setRemarks', item => {
      this.$nextTick(() => {
        this.remarks = item
      })
    })
  },
  destroy () {
    console.log(this.remarks)
    this.$root.Bus.$off('remarks')
  },
  methods: {
    toRemarks () {
      this.$router.push({
        path: '/remarks'
      })
    }
  },
  watch: {
    remarks (val) {
      console.log('watch:' + val)
    }
  }
}
</script>

<style>
  section {
    margin-top: 50px;
  }
  section p {
    padding: 0 10px;
    height: 36px;
    line-height: 36px;
    text-align: right;
    font-size: 14px;
    border-bottom: 1px solid #d8d8d8;
  }
</style>
