/*
 * @Author: louzhedong
 * @Date: 2021-03-26 17:38:12
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-26 18:16:57
 * @Description: 描述一下咯
 */
const loaderUtils = require('loader-utils');
const path = require('path');

function i18nLoader(source) {
  const options = loaderUtils.getOptions(this);
  const locale = options ? options.locale : null;

  if (locale) {
    const filename = path.resolve(__dirname, '..', 'i18n', `${locale}.json`);
    const json = require(filename);

    // 读取语言标记
    const matches = source.match(/\{\{\w+\}\}/g);
    if (matches !== null) {
      for (const match of matches) {
        const name = match.match(/\{\{(\w+)\}\}/)[1].toLowerCase();
        if (json && json[name]) {
          source = source.replace(match, json[name]);
        }
      }
    }
  }
  return source;
}

module.exports = i18nLoader;
