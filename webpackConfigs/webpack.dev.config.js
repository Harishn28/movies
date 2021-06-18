require('./envHelper');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const buildDir = path.resolve(process.cwd(), 'dist');


const appStaticAssetsPath = process.env.APP_STATIC_ASSETS_PATH;
const appHostedPath = process.env.APP_HOSTED_PATH;


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'static/js/[name].bundle.js',
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
              loader: 'style-loader',
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
    new webpack.DefinePlugin({
      //to make values values available in code (Ex: in file src/pages/app/Routes.js)
      'process.env':  JSON.stringify(process.env) 
    })
  ],
  devServer: {
    contentBase: buildDir,
    port: 3000,
    historyApiFallback: {
      rewrites: [
        // { from: /\/moviesapp((\/.*)|())/g, to: '/moviesapp/index.html' },//below regex is same as one in this line
        { from: new RegExp('\\' + appHostedPath + '((\\/.*)|())', 'g'), to: `${appStaticAssetsPath}/index.html` },
      ],
    },
    open: true
  }
};