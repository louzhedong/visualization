/*
 * @Author: louzhedong
 * @Date: 2021-02-23 11:22:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 17:16:33
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
    ...contextmenu.state,
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
    },

    // 上移
    moveUp(state) {
      const curuuid = state.curComponent.uuid;
      const _componentData = Array.prototype.concat([], state.componentData);

      let index;
      for (let i = 0, length = _componentData.length; i < length; i++) {
        if (curuuid === _componentData[i].uuid) {
          index = i;
        }
      }
      if (index < _componentData.length) {
        let temp = _componentData[index];
        _componentData[index] = _componentData[index + 1];
        _componentData[index + 1] = temp;

        state.componentData = _componentData;
      }
    },

    //下移
    // moveDown(state) {},
  },
  actions: {},
});
