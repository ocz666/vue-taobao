const path = require('path');
module.exports = {
  // 基本路径
  publicPath: './',
  // 打包输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");     
    svgRule.uses.clear();     
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({ 
      symbolId: "icon-[name]",
      include: ["./src/icons"] 
    });
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
      alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
      // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中 )
      // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
      extract: true,
      // 是否开启 CSS source map？
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {
        scss: { 
          prependData: `@import "@/style/main.scss";`
        }
      },
      // 启用 CSS modules for all css / pre-processor files.
      // requireModuleExtension:true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
      // open: process.platform === 'darwin',
      //将服务启动后默认打开浏览器
      open: true,
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {// 设置代理
          '/api': {
              target: 'https://www.cnblogs.com/',
              changeOrigin: true,
              pathRewrite: {
                  '^/api': '/'
              }
          }
      },
      before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
      // ...
  }
};