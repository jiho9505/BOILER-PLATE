const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/",
              name: "[name].[ext]?[hash]",
            },
          },
        ],
      },
	    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], 
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: {
          loader: "url-loader",
          options: {
            publicPath: "/",
            name: "[name].[ext]?[hash]",
            limit: 5000,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }), 
    new MiniCssExtractPlugin({
      filename: "index.css",
    })
  ]
};