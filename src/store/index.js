/*
 * @Author: louzhedong
 * @Date: 2021-02-23 11:22:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 16:02:06
 * @Description: 描述一下咯
 */
import Vue from 'vue';
import Vuex from 'vuex';
import contextmenu from './contextmenu';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curComponent: null, //当前选中的组件
    componentData: [],
    isClickComponent: false, // 点击中间画布是否是在点击组件
    ...contextmenu.state
  },
  mutations: {
    ...contextmenu.mutations,
    addComponent(state, component) {
      const _componentData = Array.prototype.concat.call(
        [],
        state.componentData
      );
      _componentData.push(component);
      state.componentData = _componentData;
    },

    deleteComponent(state, index) {
      // 根据索引值来删除，速度更快
      const _componentData = Array.prototype.concat.call(
        [],
        state.componentData
      );
      _componentData.splice(index, 1);
      state.componentData = _componentData;
    },

    setCurComponent(state, payload) {
      state.curComponent = payload.component;
    },

    setCurComponentStyle(state, payload) {
      state.curComponent.style = payload;
    },

    setClickComponentStatus(state, status) {
      state.isClickComponent = status;
    }
  },
  actions: {},
});
