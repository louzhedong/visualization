<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:22:54
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 13:59:59
 * @Description: 描述一下咯
-->
<template>
  <div class="home">
    <toolbar-area></toolbar-area>
    <div class="content">
      <component-area></component-area>
      <pane-area></pane-area>
      <attribute-area></attribute-area>
    </div>
  </div>
</template>

<script>
import ToolBarArea from '@/views/ToolBarArea';
import ComponentArea from '@/views/ComponentArea';
import PaneArea from '@/views/PaneArea';
import AttributeArea from '@/views/AttributeArea';
export default {
  components: {
    'toolbar-area': ToolBarArea,
    'component-area': ComponentArea,
    'pane-area': PaneArea,
    'attribute-area': AttributeArea
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
  }
}
</style>