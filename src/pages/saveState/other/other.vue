<template>
  <div class="other">
    <v-head :title="title"></v-head>
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
      title: 'otherPage'
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>

</style>
