/*
 * @Author: louzhedong
 * @Date: 2021-02-24 11:49:07
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 14:05:51
 * @Description: 描述一下咯
 */

export default function getShapeStyle(defaultStyle) {
  const style = {
    top: Number(defaultStyle.top) + 'px',
    left: Number(defaultStyle.left) + 'px'
  }
  return style;
}