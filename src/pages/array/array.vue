<template>
  <div class="array">
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        <p>
          <span @click="onclick(index, item)">{{item.rq_arr[0].list.draw.zh}}</span>
          <span @click="onclick(index, item)">{{item.rq_arr[0].list.lose.zh}}</span>
          <span @click="onclick(index, item)">{{item.rq_arr[0].list.win.zh}}</span>
        </p>
        <p>
          <span @click="onclick(index, item)">{{item.rq_arr[1].list.draw.zh}}</span>
          <span @click="onclick(index, item)">{{item.rq_arr[1].list.lose.zh}}</span>
          <span @click="onclick(index, item)">{{item.rq_arr[1].list.win.zh}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import res from '../../../static/data/data.json'
export default {
  name: 'array',
  data () {
    return {
      list: res.data,
      select: []
    }
  },
  methods: {
    onclick (index, item) {
      if (this.select[index] === undefined) {
        this.select[index] = []
      }
      this.select[index].push(item)
      console.log(this.select)
    }
  }
}
</script>

<style>
  li {
    border: 1px solid #999999;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  span {
    display: inline-block;
    border: 1px solid #999999;
    margin: 5px;
  }
</style>
