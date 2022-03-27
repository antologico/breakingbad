
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
      '/src/index.js',
      'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devServer: {
    static: './dist',
    hot: true,
    client: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [ "react-hot-loader/babel" ]
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};