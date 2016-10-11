const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

module.exports = {
  devtool: 'eval',
  context: __dirname,
  entry: "./js/src",
  output: {
    path: path.join(__dirname, "js/src"),
    publicPath: '/js/src',
    filename: 'packed.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    inline: true,
    port: 3100,
    historyApiFallback: true,
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'semistandard',
        exclude: /node_modules/
      }
    ],
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
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
     new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3100/'
      },
      {
        reload: false
      }
    ),
    new BellOnBundlerErrorPlugin(),
  ],
  postcss: function() {
    return [ autoprefixer({ browsers: ['> 1%', 'last 3 IE versions'] }) ]
  }
};