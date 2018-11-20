<template>
  <div class="element-date">
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'element-date',
  components: {},
  data () {
    return {
      value6: []
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {},
  methods: {},
  watch: {
    value6 (val) {
      console.log(val)
    }
  }
}
</script>

<style>
</style>
