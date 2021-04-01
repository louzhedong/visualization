/*
 * @Author: louzhedong
 * @Date: 2021-03-26 16:21:39
 * @LastEditors: louzhedong
 * @LastEditTime: 2021-04-01 16:57:42
 * @Description: 描述一下咯
 */
const BlankPlugin = require('./plugins/BlankPlugin');


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // outputDir: 'myDist',
  configureWebpack: {
    plugins: [new BlankPlugin({
      name: 'Michael'
    })],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'ReplaceLoader',
              options: {
                name: 'Michael'
              }
            },
            {
              loader: 'i18n-loader',
              options: {
                locale: 'zh'
              }
            }
          ]
        },
      ],
    },
    resolveLoader: {
      modules:  ['./node_modules', './loaders']
    }
  },
};


