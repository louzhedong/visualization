<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:59:05
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 19:39:53
 * @Description: 中心画布 
-->

<template>
  <div class="pane-area" @drop="handleDrop" @dragover="handleDragOver">
    <v-shape 
      v-for="(item, key) in componentData" 
      :key="key"
      :defaultStyle="item.style"
      :active="true"
      :zIndex="item.zIndex"
      :element="item"
      >
      <component
        :is="item.component"
        :ownStyle="getComponentStyle(item.style)"
        :propValue="item.propValue"
      />
    </v-shape>
  </div>
</template>

<script>
import getComponentStyle from '@/utils/getComponentStyle';

export default {
  data() {
    return {
      getComponentStyle,
      componentData: [
        {
          component: 'v-text',
          propValue: '文字',
          animations: [],
          events: {},
          zIndex: 0,
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
      const type = e.dataTransfer.getData('type');
      console.log(type);
      e.preventDefault();
      e.stopPropagation();
    },

    handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },
};
</script>

<style lang="less">
.pane-area {
  flex: 1;
  height: 100%;
  background: #fff;
  margin: 0 10px;
  padding: 20px;
}
</style>
