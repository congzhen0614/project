<template>
  <div class="vue-enter">
    <input type="text" placeholder="请输入账号" @keyup.enter="submit"/>
    <input type="text" placeholder="请输入账号" @keyup.enter="submit"/>
  </div>
</template>

<script>
export default {
  name: 'vue-enter',
  components: {},
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  computed: {},
  methods: {
    submit () {
      console.log('enter')
    }
  },
  watch: {}
}
</script>

<style>
</style>
