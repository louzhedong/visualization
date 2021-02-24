/*
 * @Author: louzhedong
 * @Date: 2021-02-24 15:58:23
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 16:01:10
 * @Description: 描述一下咯
 */

export default {
  state: {
    menuTop: 0,
    menuLeft: 0,
    menuShow: false,
  },

  mutations: {
    showContextMenu(state, { top, left }) {
      state.menuShow = true;
      state.menuTop = top;
      state.menuLeft = left;
    },

    hideContextMenu(state) {
      state.menuShow = false;
    }
  },
};
