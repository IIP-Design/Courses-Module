var path = require('path');
var webpack = require('webpack');
var cleanup = require('webpack-cleanup-plugin');


module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(__dirname, 'app/src', 'index.js')],
  output: {
    path: path.join(__dirname, 'app/dist'),
    publicPath: path.join(__dirname, 'app/dist'),
    filename: 'bundle.[hash].js'
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'app/src/App')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192&name=[path][name].[ext]?[hash]',
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: [
    new cleanup()
  ]
};
