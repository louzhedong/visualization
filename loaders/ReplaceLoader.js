/*
 * @Author: louzhedong
 * @Date: 2021-03-26 16:56:32
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-26 17:21:11
 * @Description: 描述一下咯
 */
const loaderUtils = require('loader-utils');

function ReplaceLoader(source) {
  const callback = this.async(); // 异步调用
  const options = loaderUtils.getOptions(this);
  source = source.replace(/\[name\]/g, options.name);
  callback(null, source);
}

module.exports = ReplaceLoader;
