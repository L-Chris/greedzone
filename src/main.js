import Vue from 'vue'
import App from './App'
import router from './router'
import installPlugins from './plugins'

Vue.config.productionTip = false

installPlugins(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
