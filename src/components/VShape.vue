<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:50:36
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 19:46:14
 * @Description: 描述一下咯
-->

<template>
  <div class="v-shape" :class="{ active: this.active }">
    <div
      class="shape-point"
      v-for="(item, key) in active ? pointList : []"
      :key="key"
      :style="getPointStyle(item)"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb'];
export default {
  name: 'v-shape',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    defaultStyle: {
      type: Object,
    },
    element: {
      type: Object,
    },
    zIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pointList,
    };
  },

  methods: {
    getPointStyle(point) {
      const { width, height } = this.defaultStyle;
      const hasT = /t/.test(point);
      const hasB = /b/.test(point);
      const hasR = /r/.test(point);
      const hasL = /l/.test(point);

      let newLeft = 0,
        newTop = 0;

      if (point.length === 2) {
        newLeft = hasL ? 0 : width;
        newTop = hasT ? 0 : height;
      } else {
        if (hasT || hasB) {
          newLeft = width / 2;
          newTop = hasT ? 0 : height;
        }
        if (hasL || hasR) {
          newLeft = hasL ? 0 : width;
          newTop = height / 2;
        }
      }

      const style = {
        marginLeft: hasR ? '-4px' : '-3px',
        marginTop: '-3px',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: 'l-resize',
      };

      return style;
    },
  },
};
</script>


<style lang="less">
.v-shape {
  position: relative;
  display: inline-block;
  .shape-point {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid #dadada;
    position: absolute;
    background: #fff;
  }
}
</style>