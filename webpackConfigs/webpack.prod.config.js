require('./envHelper');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildDir = path.resolve(process.cwd(), 'dist');
const appStaticAssetsPath = process.env.APP_STATIC_ASSETS_PATH;

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'static/js/[name].[contenthash].js',
    path: buildDir,
    publicPath: appStaticAssetsPath,
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            }
          ]
        }
      ]
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css"
    }),
    new webpack.DefinePlugin({
      //to make values values available in code (Ex: in file src/pages/app/Routes.js)
      'process.env':  JSON.stringify(process.env) 
    })
  ],
};