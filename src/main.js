/*
 * @Author: louzhedong
 * @Date: 2021-02-23 11:22:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 11:36:57
 * @Description: 描述一下咯
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
