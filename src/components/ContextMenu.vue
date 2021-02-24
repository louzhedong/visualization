<!--
 * @Author: louzhedong
 * @Date: 2021-02-24 15:53:23
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 16:08:05
 * @Description: 右键菜单
-->

<template>
  <div
    class="context-menu"
    v-show="menuShow"
    :style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
  >
    <ul @mouseup="handleMouseUp">
      <li>上移</li>
      <li>下移</li>
      <li>置顶</li>
      <li>置底</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: mapState(['menuShow', 'menuTop', 'menuLeft']),

  methods: {
    handleMouseUp() {},
  },
};
</script>

<style lang="less">
.context-menu {
  position: absolute;
  z-index: 1000;

  ul {
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 5px 0;
    padding: 6px 0;

    li {
      font-size: 14px;
      padding: 0 20px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #606266;
      height: 34px;
      line-height: 34px;
      box-sizing: border-box;
      cursor: pointer;

      &:hover {
        background-color: #f5f7fa;
      }
    }
  }
}
</style>
