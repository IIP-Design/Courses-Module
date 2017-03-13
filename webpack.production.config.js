var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cleanup = require('webpack-cleanup-plugin');


module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(__dirname, "app/src", "index.js")],
  output: {
    path: path.join(__dirname, "app/dist"),
    publicPath: path.join(__dirname, "app/dist"),
    filename: 'bundle.[hash].js'
  },
  resolve: {
    root: [
      path.resolve('./app/src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [ path.join(__dirname, 'node_modules') ]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new cleanup(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  postcss: function() {
    return [ autoprefixer({ browsers: ['> 1%', 'last 3 IE versions'] }) ]
  }
};
