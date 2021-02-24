<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:59:05
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 14:46:25
 * @Description: 中心画布 
-->

<template>
  <div class="pane-area" @drop="handleDrop" @dragover="handleDragOver">
    <v-shape
      v-for="(item, key) in componentData"
      :key="key"
      :defaultStyle="item.style"
      :active="item.uuid === curComponent.uuid"
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
import getComponentAttribute from '@/utils/getComponentAttribute';

export default {
  data() {
    return {
      getComponentStyle,
    };
  },

  computed: {
    componentData() {
      return this.$store.state.componentData;
    },
    curComponent() {
      return this.$store.state.curComponent || {};
    }
  },

  methods: {
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      const type = e.dataTransfer.getData('type');

      this.$store.commit('addComponent', getComponentAttribute(type));
    },

    handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
    }
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
  position: relative;
}
</style>
