<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:57:12
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 14:47:50
 * @Description: 组件栏 
-->

<template>
  <div class="component-area" @dragstart="handleDragStart">
    <div
      class="component-item"
      v-for="(item, key) in typeList"
      :key="key"
      :data-type="item.key"
      draggable
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: [
        { key: 'v-text', label: '文字' },
        {
          key: 'v-image',
          label: '图片',
        },
        {
          key: 'v-button',
          label: '按钮',
        },
      ],
    };
  },

  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData('type', e.target.dataset.type);
    },
  },
};
</script>

<style lang="less">
.component-area {
  width: 180px;
  height: 100%;
  background: #fff;
  padding: 10px;
  .component-item {
    display: inline-block;
    border: 1px solid #dadada;
    padding: 5px 15px;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>
