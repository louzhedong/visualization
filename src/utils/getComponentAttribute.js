/*
 * @Author: louzhedong
 * @Date: 2021-02-24 10:44:01
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-02-24 14:00:22
 * @Description: 描述一下咯
 */
import uuid from '@/utils/uuid';

export default function getComponentAttribute(type) {
  let component;

  if (type === 'v-text') {
    component = {
      component: 'v-text',
      propValue: '文字',
      animations: [],
      events: {},
      zIndex: 0,
      uuid: uuid(),
      style: {
        top: 0,
        left: 0,
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
      },
    };
  } else if (type === 'v-button') {
    component = {
      component: 'v-button',
      propValue: '按钮',
      animations: [],
      events: {},
      zIndex: 0,
      uuid: uuid(),
      style: {
        top: 100,
        left: 100,
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
      },
    };
  } else if (type === 'v-image') {
    component = {
      component: 'v-image',
      propValue: 'https://image.xiaomaiketang.com/xm/yX2crdBPeX.jpg',
      animations: [],
      events: {},
      zIndex: 0,
      uuid: uuid(),
      style: {
        top: 0,
        left: 0,
        width: 200,
        height: 33,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '',
        letterSpacing: 0,
        textAlign: '',
        color: '',
      },
    };
  }

  return component;
}
