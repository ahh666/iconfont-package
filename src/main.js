import Vue from 'vue'
import App from './App'
import router from './router'

// 引入并注册全局组件
import iconUnicode from './ui/iconUnicode'
Vue.component('iUnicode',iconUnicode)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
