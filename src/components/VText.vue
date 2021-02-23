<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:51:19
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 14:35:19
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
  <div class="text disable">{{propValue}}</div>
</template>

<script>
export default {
  name: 'v-text',
  props: {
    propValue: {
      type: String,
    },
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
