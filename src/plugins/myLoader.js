module.exports = function(source) {
    // source 为compiler 传递给 loader 的一个文件的源内容
    console.log('source', source)
    // 该处理函数需要返回处理后的内容
    return source
}
