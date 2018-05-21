<template>
  <div class="position">
    <v-head></v-head>
    <div class="locat">
      <p><span>纬度:</span>{{ lat }}</p>
      <p><span>经度:</span>{{ lon }}</p>
      <p><span>城市名称:</span>{{ cityName }}</p>
    </div>
  </div>
</template>

<script>
import head from '@/components/header/head'
import {getLocation, latitude, longitude, cityName} from '@/store/location/location'
export default {
  components: {
    'v-head': head
  },
  data () {
    return {
      lat: '',
      lon: '',
      cityName: ''
    }
  },
  mounted () {
    getLocation()
    this.setLocat()
  },
  methods: {
    setLocat () {
      this.lat = latitude
      this.lon = longitude
      this.cityName = cityName
    }
  }
}
</script>

<style>
  .position {
    padding-top: 50px;
  }
</style>
