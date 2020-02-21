let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))

    //配置快捷路径，styles为路径名字，resolve是原路径地址
  }
}
