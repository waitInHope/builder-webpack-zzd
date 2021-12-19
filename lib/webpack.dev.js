
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base');

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 开启文件监听
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'source-map',
};

module.exports = merge(baseConfig, devConfig);
