import 'babel-polyfill' // 这个一定babel垫片一定要放在最前面
import Vue from 'vue'
import App from './App'
import router from './router' // 1、引入router中export的router实例
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body) // 没有300ms的延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 2,把router传入到vue对象上
  render: h => h(App)
})
