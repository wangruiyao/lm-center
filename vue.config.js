let path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
// const cdn = {
//   css: [],
//   js: [
//     'https://cdn.bootcss.com/vue/2.6.10/vue.runtime.min.js',
//     'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
//     'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
//     'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
//   ]
// }

module.exports = {
  // pages: pagesConfig,
  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  },
  // outputDir: 'dist/' + (process.argv[3] === undefined ? DEFAULT_BUILD_MODULE : process.argv[3]),
  outputDir: './lianm',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  css: {
    extract: false,
    loaderOptions: {
      postcss: { // 配置px2rem
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      },
      sass: {
        data: `
          @import "./src/assets/styles/variables.scss";
          @import "./src/assets/styles/mixins.scss";
        `
      }
    }
  },
  transpileDependencies: [],
  productionSourceMap: false, // 打包时忽略 .js.map文件
  pluginOptions: {
    // 'cube-ui': {
    //   postCompile: true,
    //   theme: true
    // }
  },
  devServer: {
    disableHostCheck: true,
    // historyApiFallback: true, // history模式开启
    proxy: {
      
      '/api': {
        // target:'http://192.168.0.210:7700/lmfrontstage',
        // http://192.168.0.210:7700/lmfrontstage-juning，
        target:'http://m.enms.cn/lmfrontstage/',
        // target:'http://192.168.0.234:9004/',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/json': {
        target:'http://m.enms.cn',
        // target:'http://192.168.0.210',
        changeOrigin: true,
        pathRewrite:{
          '^/json':''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .add('/src')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      });
    config.resolve.alias
      .set('src', resolve('src'))
      .set('public', resolve('public'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('plugins', resolve('src/plugins'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('core', resolve('src/core'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
    config.output.filename('[name].[hash].js').end()
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  configureWebpack: config => {
    if (isProduction) {
      // 生产环境

      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]', // 提示示compression-webpack-plugin@3.0.0的话asset改为filename
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );

    } else {
      // 开发环境

    }
  }
}
