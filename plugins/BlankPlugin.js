/*
 * @Author: louzhedong
 * @Date: 2021-03-26 16:32:25
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-03-27 11:17:18
 * @Description: 描述一下咯
 */
const PLUGINS_NAME = 'BlankPlugin';

function BlankPlugin(options) {
  this.options = options;
}

BlankPlugin.prototype.apply = function(compiler) {
  const _this = this;
  compiler.hooks.run.tap(PLUGINS_NAME, function(compilation) {
    console.log('This is a blank plugin');
  })

  compiler.hooks.emit.tapAsync(PLUGINS_NAME, function(compilation, callback) {
    const mainfest = {};
    for (let name of Object.keys(compilation.assets)) {
      mainfest[name] = compilation.assets[name].size();
    }

    compilation.assets['mainfest.json'] = {
      source() {
        return JSON.stringify(mainfest);
      },
      size() {
        return this.source().length;
      }
    }
    callback();
  })
}

module.exports = BlankPlugin;