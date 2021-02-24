<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 13:33:18
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 10:59:12
 * @Description: 按钮组件
-->

<template>
  <button class="v-button" :style="ownStyle">{{propValue}}</button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    propValue: {
      type: String,
      default: ""
    },
    ownStyle: {
      type: Object
    }
  }
}
</script>