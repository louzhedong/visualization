/*
 * @Author: louzhedong
 * @Date: 2021-02-23 11:22:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 14:10:41
 * @Description: 描述一下咯
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VButton from '@/components/VButton';
import VImage from '@/components/VImage';
import VText from '@/components/VText';
import VShape from '@/components/VShape';

Vue.config.productionTip = false

Vue.component(VButton.name, VButton);
Vue.component(VImage.name, VImage);
Vue.component(VText.name, VText);
Vue.component(VShape.name, VShape);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
