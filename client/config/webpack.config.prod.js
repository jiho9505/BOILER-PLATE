const { merge } = require('webpack-merge');
const commonWebpack = require('./webpack.config.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * ImageMinimizerPlugin : 빌드 시 이미지 최적화 용도
 * TerserPlugin의 drop_console : console.log 제거 용도 / 기본적인 난독화, 최적화는 prod에서 제공
 * transform-remove-console은 prod에서만 적용시키기는 까다로운듯 해서 위의 방법 적용.
 */
module.exports = merge(commonWebpack, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], 
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
           compress: {
               drop_console: true
           }
          }
      })
    ]
  }
});