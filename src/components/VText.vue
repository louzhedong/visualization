<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:51:19
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-25 13:38:14
 * @Description: 文字组件 
-->

<template>
  <div class="v-text edit" v-if="editing" :style="ownStyle" contenteditable="true">{{propValue}}</div>
  <div v-else class="v-text" :style="ownStyle">{{ propValue }}</div>
</template>

<script>
export default {
  name: 'v-text',
  props: {
    propValue: {
      type: String,
    },
    ownStyle: {
      type: Object,
    },
  },
  data() {
    return {
      editing: true,
    };
  },

  methods: {
    handleInput() {},
  },
};
</script>

<style lang="less">
.v-text {
  border: 1px solid #dadada;
}
</style>
