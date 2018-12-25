<template>
  <div class="play">
    <audio class="my-audio" ref="myAudio" controls="controls">
      <source src="../../../static/mp3/一个人去巴黎.mp3" type="audio/ogg" />
      <source src="../../../static/mp3/一个人去巴黎.mp3" type="audio/mpeg" />
    </audio>
    <img class="close-icon" src="../../assets/play/close-icon.png"/>
    <img class="mini-icon"  src="../../assets/play/mini-icon.png"/>
    <img class="play-icon"  src="../../assets/play/play-icon.png" @click="clickPlay" v-if="!play"/>
    <img class="paus-icon"  src="../../assets/play/paus-icon.png" @click="clickPaus" v-if="play" />
    <!-- 进度条背景 -->
    <div class="progress-bar-bg" ref="bar" :style="progressBarWidth" @touchstart="touchstart">
      <!-- 进度条进度 -->
      <div class="progress-bar-jd" :style="{width: playWidth}"></div>
      <div class="progress-bar-bs" :style="{left: playPlace}">
        <img class="progress-bar-tp" @touchmove="touchmove" src="../../../static/images/avatar.jpg"/>
      </div>
    </div>
    <!-- 进度条开始时间 -->
    <div class="progress-bar-st">{{ lengthOfPlay }}</div>
    <!-- 进度条结束时间 -->
    <div class="progress-bar-et">{{ lengthOfSong }}</div>
  </div>
</template>

<script>
export default {
  name: 'play',
  data () {
    return {
      progressBarWidth: {
        width: (window.innerWidth * 0.98 / 50 - 2) + 'rem'
      },
      playWidth: '0%',
      playPlace: '0%',
      play: false,
      player: '',
      duration: '', // 歌曲长度
      currentTime: '' // 播放长度
    }
  },
  created () {
  },
  mounted () {
    this.lengthOfSong = 0
    this.lengthOfPlay = 0
  },
  computed: {
    lengthOfSong: {
      get () {
        return this.duration
      },
      set (duration) {
        this.duration = this.keepTwo(parseInt(duration / 60)) + ':' + this.keepTwo(parseInt(duration % 60))
      }
    },
    lengthOfPlay: {
      get () {
        return this.currentTime
      },
      set (currentTime) {
        this.currentTime = this.keepTwo(parseInt(currentTime / 60)) + ':' + this.keepTwo(parseInt(currentTime % 60))
      }
    }
  },
  methods: {
    keepTwo (val) {
      if (val.toString().length === 1) {
        return '0' + val
      } else {
        return val
      }
    },
    clickPlay () {
      let audio = this.$refs.myAudio
      audio.load()
      audio.play()
      this.play = true
      // 设置时间
      this.player = setInterval(() => {
        // 音频总长度
        this.lengthOfSong = audio.duration
        // 音频播放长度
        this.lengthOfPlay = audio.currentTime
        let str = (audio.currentTime / audio.duration * 100).toString()
        this.playPlace = this.playWidth = str.substring(0, str.indexOf('.') + 2) + '%'
        this.playCache = audio.buffered.end(audio.buffered.length - 1) / audio.duration * 100 + '%'
        // 判断播放结束
        if (audio.ended) {
          this.clickPaus()
        }
      }, 100)
    },
    clickPaus () {
      let audio = this.$refs.myAudio
      this.play = false
      audio.pause()
      clearInterval(this.player)
    },
    touchstart (e) {
      const audioBox = this.$refs.bar
      const audio = this.$refs.myAudio
      let num = (e.touches[0].clientX - audioBox.offsetLeft) / audioBox.offsetWidth
      if (num > 1) { num = 1 } else if (num < 0) { num = 0 }
      this.playWidth = num * 100 + '%'
      this.playPlace = num * 100 + '%'
      audio.currentTime = audio.duration * num
    },
    touchmove (e) {
      const audioBox = this.$refs.bar
      const audio = this.$refs.myAudio
      let num = (e.touches[0].clientX - audioBox.offsetLeft) / audioBox.offsetWidth
      if (num > 1) { num = 1 } else if (num < 0) { num = 0 }
      this.playWidth = num * 100 + '%'
      this.playPlace = num * 100 + '%'
      audio.currentTime = audio.duration * num
    }
  },
  watch: {
  }
}
</script>

<style>
  .my-audio {
    display: none;
  }
  .play {
    position: fixed;
    bottom: 5px;
    left: 1%;
    margin: 0 auto;
    width: 98%;
    height: 100px;
    background: rgba(248, 189, 72, 0.99);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .close-icon, .mini-icon {
    float: right;
    width: 0.32rem;
    height: 0.32rem;
    margin: 0.2rem;
    margin-bottom: 0;
  }
  .play-icon, .paus-icon {
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    left: 0.3rem;
    top: 50%;
    margin-top: -0.4rem;
  }
  .progress-bar-bg {
    height: 4px;
    border-radius: 2px;
    background: rgba(224, 169, 61, 1);
    position: absolute;
    margin-top: -2px;
    left: 1.55rem;
    top: 50%;
  }
  .progress-bar-jd {
    height: 4px;
    border-radius: 2px;
    background: #ffffff;
  }
  .progress-bar-bs {
    width: 0.52rem;
    height: 0.52rem;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
    margin-top: -0.3rem;
    margin-left: -0.3rem;
    position: absolute;
    top: 50%;
  }
  .progress-bar-tp {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .progress-bar-st, .progress-bar-et {
    font-size: 0.24rem;
    color: #655022;
    position: absolute;
    top: 70%;
  }
  .progress-bar-st {
    left: 1.4rem;
  }
  .progress-bar-et {
    right: 0.3rem;
  }
</style>
