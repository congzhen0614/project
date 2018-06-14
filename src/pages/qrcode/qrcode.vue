<template>
  <div class="qrcode">
    <v-head :title="title"></v-head>
    <section>
      <ul>
        <li v-for="(item, index) in codeList" :key="index">
          <div id="qrcode" class="qrcode-list" ref="qrcode"></div>
        </li>
      </ul>
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
      title: '生成二维码',
      codeList: ['2018061301', '2018061302', '2018061303', '2018061304', '2018061305', 'http://www.baidu.com']
    }
  },
  mounted () {
    this.setCodeList()
  },
  methods: {
    setCodeList () {
      this.codeList.forEach((item, index) => {
        let qrcodeList = document.getElementsByClassName('qrcode-list')[index]
        this.qrcode(qrcodeList, item)
      })
    },
    qrcode (domName, item) {
      let qrcode = new QRCode(domName, {
        text: item,
        width: 100,
        height: 100,
        colorDark: '#5573B7',
        colorLight: '#fff',
        src: './avatar.jpg'
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
section {
  padding: 20px;
}
.qrcode li {
  margin-bottom: 20px;
}
.qrcode li:last-child {
  margin-bottom: 0px;
}
</style>
