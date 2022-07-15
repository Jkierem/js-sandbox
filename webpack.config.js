const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry:  {
    index: './src/home/index.ts',
    other: './src/other/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    static: {
      directory: './dist'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      chunks: ["index"],
      title: "Index page",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: './templates/other.html',
      chunks: ["other"],
      title: "Other page",
      filename: "other.html"
    })
  ]
};

module.exports = config;
