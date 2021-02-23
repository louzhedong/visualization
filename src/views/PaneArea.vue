<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:59:05
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 14:58:25
 * @Description: 中心画布 
-->

<template>
  <div class="pane-area" @drop="handleDrop">
    <component 
      v-for="(item, key) in componentData"
      :is="item.component"
      :key="key"
      :style="item.style"
      :propValue="item.propValue"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentData: [
        {
          component: 'v-text',
          propValue: '文字',
          animations: [],
          events: {},
          style: {
            width: 200,
            height: 33,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
          },
        },
      ],
    };
  },

  methods: {
    handleDrop(e) {
      console.log(11);
      e.preventDefaule();
      e.stopPropagation();

      
    }
  }
};
</script>

<style lang="less">
.pane-area {
  flex: 1;
  height: 100%;
  background: #fff;
  margin: 0 10px;
}
</style>
