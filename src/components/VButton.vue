<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 13:33:18
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 14:19:41
 * @Description: 按钮组件
-->

<template>
  <button class="v-button">{{propValue}}</button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    propValue: {
      type: String,
      default: ""
    }
  }
}
</script>