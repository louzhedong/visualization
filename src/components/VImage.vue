<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:51:24
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 14:18:42
 * @Description: 图片组件
-->
<template>
  <div class="v-image">
    <img :src="propValue"/>
  </div>
</template>

<script>
export default {
  name: 'v-image',
  props: {
    propValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less">
.v-image {
  overflow: hidden;
}
</style>