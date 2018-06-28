<template>
  <div class="emit">
    <v-head :title="title"></v-head>
    <section class="textarea">
      <textarea v-model="remarks"></textarea>
      <span class="submit" @click="clickSubmit()">提交</span>
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
      title: 'remarks',
      remarks: ''
    }
  },
  mounted () {
  },
  methods: {
    clickSubmit () {
      this.$root.Bus.$emit('remarks', this.remarks)
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  .textarea {
    margin-top: 50px;
    overflow: hidden;
    padding: 20px;
  }
  .textarea textarea {
    width: 100%;
    height: 200px;
    outline: none;
    resize: none;
    border-radius: 10px;
    border: 1px dashed #d8d8d8;
  }
  .submit {
    display: block;
    width: 80px;
    height: 40px;
    border-radius: 4px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    background-color: #F8BD48;
    color: #ffffff;
    float: right;
    margin-top: 10px;
  }
</style>
