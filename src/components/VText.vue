<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:51:19
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 19:41:54
 * @Description: 文字组件 
-->

<template>
  <!-- <textarea 
    v-if="editMode === 'edit'"
    class="textarea" 
    :value="propValue" 
    ref="v-text" 
    @input="handleInput"
  ></textarea> -->
  <div class="text disable" :style="ownStyle">{{propValue}}</div>
</template>

<script>
export default {
  name: 'v-text',
  props: {
    propValue: {
      type: String,
    },
    ownStyle: {
      type: Object
    }
  },
  data() {
    return {
      editMode: 'edit'
    }
  },

  methods: {
    handleInput() {

    }
  }
};
</script>

<style lang="less">
.text {
  border: 1px solid #dadada;
}
</style>
