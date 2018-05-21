<template>
  <div class="contentList">
    <ul>
      <li>{{ navIndex }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    navIndex: {
      type: String
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {}
  }
}
</script>

<style>
</style>
