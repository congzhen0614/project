// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/api.js'
import * as custom from './store/filter/filter.js'

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.prototype.$axios = api

Vue.use(ElementUI)

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./assets/loading.png'),
  loading: require('./assets/loading.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    Bus: new Vue()
  },
  components: { App },
  template: '<App/>'
})
