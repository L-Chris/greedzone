const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    const conf = config.toConfig()

    config.resolve
      .alias
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))

    config.module
      .rule('pug')
      .test(/\.pug$/)
        .uses
          .delete('pug-plain-loader')
          .end()
        .use('pug-loader')
          .loader('pug-loader')

    config
      .plugin('html')
      .tap(args => {
        args[0].templateParameters = {
          env: process.env
        }
        args[0].template = 'src/templates/index.pug'
        return args
      })
  },
  baseUrl: '/',
  devServer: {},
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/mixins.scss";
          @import "@/styles/vars.scss";
        `
      }
    }
  }
}
