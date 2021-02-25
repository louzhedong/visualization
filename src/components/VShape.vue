<!--
 * @Author: louzhedong
 * @Date: 2021-02-23 11:50:36
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-25 11:36:41
 * @Description: 描述一下咯
-->

<template>
  <div
    class="v-shape"
    :class="{ active: this.active }"
    @mousedown="handleMouseDown"
    :style="shapeStyle"
  >
    <div
      class="shape-point"
      v-for="(item, key) in active ? pointList : []"
      @mousedown="handleMouseDownOnPoint(item)"
      :key="key"
      :style="getPointStyle(item)"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
import getShapeStyle from '@/utils/getShapeStyle';

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
    }
  },
  data() {
    return {
      pointList,
    };
  },

  computed: {
    shapeStyle() {
      return getShapeStyle(this.defaultStyle);
    },
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

    // 元素上点击
    handleMouseDown(e) {
      e.stopPropagation();
      this.$store.commit('setClickComponentStatus', true);
      this.$store.commit('setCurComponent', { component: this.element });

      const pos = { ...this.defaultStyle };
      const startX = e.clientX;
      const startY = e.clientY;

      const startTop = Number(pos.top);
      const startLeft = Number(pos.left);

      const move = moveEvent => {
        const currX = moveEvent.clientX;
        const currY = moveEvent.clientY;
        pos.top = currY - startY + startTop;
        pos.left = currX - startX + startLeft;

        this.$store.commit('setCurComponentStyle', pos);
        this.$forceUpdate();
      };

      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },

    // 小圆点上点击
    handleMouseDownOnPoint(point) {
      const mousedownEvent = window.event;
      mousedownEvent.stopPropagation();
      mousedownEvent.preventDefault();
      this.$store.commit('setClickComponentStatus', true);

      const hasT = /t/.test(point);
      const hasB = /b/.test(point);
      const hasR = /r/.test(point);
      const hasL = /l/.test(point);
      const pos = { ...this.defaultStyle };
      const startX = mousedownEvent.clientX;
      const startY = mousedownEvent.clientY;
      const height = Number(pos.height);
      const width = Number(pos.width);
      const left = Number(pos.left);
      const top = Number(pos.top);

      const move = moveEvent => {
        const currX = moveEvent.clientX;
        const currY = moveEvent.clientY;
        const distX = currX - startX;
        const distY = currY - startY;
        const newHeight = height + (hasT ? -distY : hasB ? distY : 0);
        const newWidth = width + (hasL ? -distX : hasR ? distX : 0);
        pos.height = newHeight > 0 ? newHeight : 0;
        pos.width = newWidth > 0 ? newWidth : 0;
        pos.left = left + (hasL ? distX : 0);
        pos.top = top + (hasT ? distY : 0);

        this.$store.commit('setCurComponentStyle', pos);
      };

      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      }

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },
  },
};
</script>

<style lang="less">
.v-shape {
  position: absolute;
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
