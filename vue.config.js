const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

//定义cesium源码路径
let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 8090, //修改服务端口号
    open: true
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  outputDir: 'dist', //设置 build 输出目录
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['/Users/wulin/工作区/pratice/vue3-cesium/src/theme/index.less']
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('cesium', path.resolve(__dirname, cesiumSource))
  },
  configureWebpack: () => {
    const plugins = [
      // Define relative base path in cesium for loading assets
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./cesium')
      }),
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'cesium/Workers' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'cesium/Assets' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'cesium/Widgets' }])
    ]
    return {
      plugins: plugins
    }
  }
}
