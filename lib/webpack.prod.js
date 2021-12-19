
const merge = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const cssnano = require('cssnano');

const baseConfig = require('./webpack.base');

const prodConfig = {
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetsNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react', // 依赖包里的模块名
          entry: 'https://now8.gtimg.com/now/lib/16.8.6/react.min.js',
          global: 'React', // 模块在本地项目的别名
        },
        {
          module: 'react-dom',
          entry: 'https://now8.gtimg.com/now/lib/16.8.6/react-dom.min.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],
  optimization: {
    // 提取基础库
    // splitChunks: {
    //     cacheGroups: {
    //         commons: {
    //             test: /(react|react-dom)/,
    //             name: 'vendors',
    //             chunks: 'all'
    //         }
    //     }
    // },

    // 提取公共代码
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  mode: 'production',
};

module.exports = merge(baseConfig, prodConfig);
