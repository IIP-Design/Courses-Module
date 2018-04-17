var path = require('path');
var webpack = require('webpack');
var cleanup = require('webpack-cleanup-plugin');


module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: [path.join(__dirname, 'app/src', 'index.js')],
    common: [
      'babel-polyfill',
      'prop-types',
      'react',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk'
    ]
  },
  output: {
    path: path.join(__dirname, 'app/dist/'),
    publicPath: path.join(__dirname, 'app/dist/'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
	optimization: {
    runtimeChunk: true,
		splitChunks: {
      chunks: 'all'
		}
	},
  resolve: {
    alias: {
      root: path.resolve(__dirname, 'app/src'),
      App: path.resolve(__dirname, 'app/src/App'),
      Course: path.resolve(__dirname, 'app/src/Course'),
      Instructor: path.resolve(__dirname, 'app/src/Instructor'),
      Language: path.resolve(__dirname, 'app/src/Language'),
      Lesson: path.resolve(__dirname, 'app/src/Lesson'),
      Quiz: path.resolve(__dirname, 'app/src/Quiz')
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
              importLoaders: 2,
              minimize: true
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
