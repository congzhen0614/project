<template>
  <div class="qrcode">
    <v-head :title="title"></v-head>
    <section>
      <div id="qrcode" ref="qrcode"></div>
    </section>
  </div>
</template>

<script>
import head from '@/components/header/head'
import QRCode from 'qrcodejs2'
export default {
  components: {
    'v-head': head
  },
  data () {
    return {
      title: '生成二维码'
    }
  },
  mounted () {
    this.qrcode()
  },
  methods: {
    qrcode () {
      let qrcode = new QRCode(this.$refs.qrcode, {
        text: '201806131534',
        width: 100,
        height: 100,
        colorDark: '#000',
        colorLight: '#fff'
      })
      console.log(qrcode)
    }
  }
}
</script>

<style>
.qrcode {
  margin-top: 50px;
}
</style>
