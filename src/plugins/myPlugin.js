const pluginName = 'MyPlugin'
const HtmlWebpackPlugin  = require('html-webpack-plugin')

/**
 * 给打包后的js文件加时间前缀
 */
class MyPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, (compilation, callback) => {
            // console.log("webpack 构建过程开始！", compilation, callback);
            HtmlWebpackPlugin .getHooks(compilation).beforeAssetTagGeneration.tap(pluginName, (htmlPluginData, cb) => {
                console.log('assets', htmlPluginData.assets)
                const js  = [...htmlPluginData.assets.js]
                js.forEach((item, index) => {
                    // 直接修改js数组内的元素
                    htmlPluginData.assets.js[index] = `${item}?${new Date().getTime()}`
                })
            })
        });
    }
}
module.exports =  MyPlugin
