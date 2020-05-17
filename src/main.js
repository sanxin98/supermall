import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	router
}).$mount('#app')

//解决多次点击router出错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
