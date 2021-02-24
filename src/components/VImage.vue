<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:51:24
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 17:11:28
 * @Description: 图片组件
-->
<template>
  <div class="v-image" :style="ownStyle">
    <img class="v-img" :src="propValue" draggable="false"/>
  </div>
</template>

<script>
export default {
  name: 'v-image',
  props: {
    propValue: {
      type: String,
      required: true
    },
    ownStyle: {
      type: Object
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
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>