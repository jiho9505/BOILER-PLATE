const { merge } = require('webpack-merge');
const commonWebpack = require('./webpack.config.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // 빌드 시 이미지 최적화 용도

module.exports = merge(commonWebpack, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      exclude: /node_modules/,
      minimizerOptions: {
        plugins: [
          ['gifsicle', { progressive: true }],
          ['jpegtran', { progressive: true, optimizationLevel: 5 }],
          ['optipng', { progressive: true, optimizationLevel: 5 }],
        ],
      },
    }),
  ],
});