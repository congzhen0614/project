import axios from 'axios'

// 接口列表
export default {
  getShoppingcarList () {
    return axios.get('/static/data/shoppingcarList.json')
  }
}
