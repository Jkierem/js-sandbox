const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
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
      templateContent: ({ htmlWebpackPlugin }) =>  '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + 
        htmlWebpackPlugin.options.title + 
        '</title></head><body></body></html>',
      filename: 'index.html',
      title: "My app"
    })
  ]
};

module.exports = config;
