<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:59:05
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 16:34:05
 * @Description: 中心画布 
-->

<template>
  <div
    class="pane-area"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @mousedown="handleMouseDown"
    @mouseup="reSelectComponent"
    @contextmenu="handleShowContextMenu"
  >
    <Grid /> 
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
    <ContextMenu />
  </div>
</template>

<script>
import getComponentStyle from '@/utils/getComponentStyle';
import getComponentAttribute from '@/utils/getComponentAttribute';
import ContextMenu from '@/components/ContextMenu';
import Grid from '@/components/Grid';

export default {
  components: {
    ContextMenu,
    Grid
  },
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
    },
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
    },

    // 点击白板空白处
    handleMouseDown() {
      this.$store.commit('setClickComponentStatus', false);
    },

    reSelectComponent() {
      if (!this.$store.state.isClickComponent) {
        this.$store.commit('setCurComponent', { component: null });
        this.$store.commit('hideContextMenu');
      }
    },

    handleShowContextMenu(e) {
      e.stopPropagation();
      e.preventDefault();
      let target = e.target;
      let top = e.offsetY;
      let left = e.offsetX;

      while (!target.className.includes('pane-area')) {
        top += target.offsetTop;
        left += target.offsetLeft;
        target = target.parentNode;
      }
      if (e.target.className === ('v-button' || 'v-image' || 'v-text')) {
        this.$store.commit('showContextMenu', { top, left });
      }
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
  position: relative;
  overflow: hidden;
}
</style>
