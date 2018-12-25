<template>
  <div class="vue-video">
    <video ref="video">
      <source src="http://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4">
      <source src="http://www.runoob.com/try/demo_source/movie.ogg" type="video/ogg">
    </video>
    <img class="play-icon" src="./images/play-icon.png" v-if="!played" @click="onPlay" />
    <img class="play-icon" src="./images/pause-icon.png" v-if="played" @click="onPause" />
    <div class="video-perating">
      <img class="full-screen-icon" src="./images/full-screen-icon.png" />
      <div class="broadcast-pace" ref="playerLine" @touchstart="touchstart">
        <span class="broadcast-pace-time">{{ currentTime | timeFormat }}</span>
        <div class="time-background">
          <div class="time-broadcast-pace" :style="{width: playPlace}">
            <img class="broadcast-pace-icon" :style="{left: playPlace}" @touchmove="touchmove" src="./images/broadcast-pace-icon.png" />
          </div>
          <div class="time-cache" :style="{left: playPlace, width: playCache}"></div>
        </div>
        <span class="broadcast-pace-end-time">{{ duration | timeFormat }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-video',
  components: {},
  data () {
    return {
      played: false,
      currentTime: 0,
      duration: 0,
      playPlace: '0%',
      playCache: '0%',
      player: ''
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    onPlay () {
      const video = this.$refs.video
      this.played = true
      video.play()
      this.duration = video.duration
      this.player = setInterval(() => {
        this.currentTime = video.currentTime
        let str = (video.currentTime / video.duration * 100).toString()
        this.playPlace = str.substring(0, str.indexOf('.') + 2) + '%'
        this.playCache = (video.buffered.end(video.buffered.length - 1) - video.currentTime) / video.duration * 100 + '%'
        if (video.ended) {
          this.onPause()
        }
      }, 100)
    },
    onPause () {
      const video = this.$refs.video
      clearInterval(this.player)
      this.played = false
      video.pause()
    },
    touchstart (event) {
      let e = event || window.event
      const videoBox = this.$refs.playerLine
      const video = this.$refs.video
      let num = (e.touches[0].clientX - videoBox.offsetLeft) / videoBox.offsetWidth
      if (num > 1) { num = 1 } else if (num < 0) { num = 0 }
      this.playCache = num * 100 + '%'
      this.playPlace = num * 100 + '%'
      video.currentTime = video.duration * num
    },
    touchmove (event) {
      let e = event || window.event
      const videoBox = this.$refs.playerLine
      const video = this.$refs.video
      let num = (e.touches[0].clientX - videoBox.offsetLeft) / videoBox.offsetWidth
      if (num > 1) { num = 1 } else if (num < 0) { num = 0 }
      this.playCache = num * 100 + '%'
      this.playPlace = num * 100 + '%'
      video.currentTime = video.duration * num
    }
  },
  watch: {}
}
</script>

<style>
.vue-video {
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #000000;
}
.vue-video video {
  width: 100%;
  height: 100%;
}
.vue-video .play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
}
.vue-video .video-perating {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: rgba(255, 255, 255, 0.25);
}
.vue-video .full-screen-icon {
  width: 18px;
  height: 18px;
  float: right;
  margin: 13px 20px;
}
.broadcast-pace {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
}
.broadcast-pace img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 0%;
  margin-top: -8px;
  margin-left: -10px;
}
.broadcast-pace span {
  font-size: 12px;
  color: #000000;
}
.broadcast-pace .broadcast-pace-time {
  margin-right: 10px;
}
.broadcast-pace .broadcast-pace-end-time {
  margin-left: 10px;
}
.broadcast-pace .time-background {
  width: 100%;
  height: 2px;
  margin-top: 22px;
  border-radius: 2px;
  position: relative;
  background-color: #000000;
}
.broadcast-pace .time-broadcast-pace {
  width: 0%;
  height: 2px;
  border-radius: 2px;
  background-color: #F8BD48;
}
.broadcast-pace .time-cache {
  position: absolute;
  top: 0;
  left: 0%;
  width: 0%;
  height: 2px;
  border-radius: 2px;
  background-color: #FFFFFF;
}
</style>
