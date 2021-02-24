/*
 * @Author: louzhedong
 * @Date: 2021-02-23 11:22:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 13:55:05
 * @Description: 描述一下咯
 */
import Vue from 'vue'
import Vuex from 'vuex'
import uuid from '@/utils/uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curComponent: null,  //当前选中的组件
    componentData: [
      {
        component: 'v-text',
        propValue: '文字',
        animations: [],
        events: {},
        zIndex: 0,
        uuid: uuid(),
        style: {
          left: 0,
          top: 0,
          width: 200,
          height: 33,
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: '',
          color: '',
        },
      },
    ],
  },
  mutations: {
    addComponent(state, component) {
      const _componentData = Array.prototype.concat.call([], state.componentData);
      _componentData.push(component);
      state.componentData = _componentData;
    },

    deleteComponent(state, index) {  // 根据索引值来删除，速度更快
      const _componentData = Array.prototype.concat.call([], state.componentData);
      _componentData.splice(index, 1);
      state.componentData = _componentData;
    },

    setCurComponent(state, payload) {
      state.curComponent = payload.component;
    },

    setCurComponentStyle(state, payload) {
      state.curComponent.style = payload;
    }

  },
  actions: {
  }
})
