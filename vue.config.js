const { defineConfig } = require('@vue/cli-service')
const MyPlugin = require('./src/plugins/myPlugin')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.plugins = config.plugins.concat(new MyPlugin())
  },
  chainWebpack: config => {
    config.resolveLoader.alias.set('my-loader', path.resolve(__dirname, './src/plugins/myLoader.js'))
    const cssRule = config.module.rule('css')
    cssRule.use('my-loader').loader('my-loader').end()
  }
})
