/*
 * @Author: louzhedong
 * @Date: 2021-02-23 19:38:15
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-23 19:45:21
 * @Description: 描述一下咯
 */

export default function getComponentStyle(style) {
  const _style = Object.assign({}, style);
  _style.width = style.width + 'px';
  _style.height = style.height + 'px';

  return _style;
}
