var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, "js/src", "index.js"),
  output: {
    path: path.join(__dirname, "js/src"),
    filename: 'packed.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader',
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),

    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: '127.0.0.1:8080'
    }, { reload: true })
  ],
  postcss: function() {
    return [ autoprefixer({ browsers: ['> 1%', 'last 3 IE versions'] }) ]
  }
};
