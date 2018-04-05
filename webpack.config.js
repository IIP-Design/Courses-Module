var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    app: ['./app/src'],
    common: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ]
  },
  output: {
    path: path.join(__dirname, 'app/src/build'),
    publicPath: '/app/src/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
	optimization: {
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
  devServer: {
    inline: true,
    port: 4080,
    historyApiFallback: true,
    compress: true,
    hotOnly: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              configFile: path.join(__dirname, '.eslintrc')
            }
          }
        ],
        exclude: [path.join(__dirname, 'node_modules')]
      },
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
    new webpack.SourceMapDevToolPlugin({
      filename: 'bundle.js.map',
      module: false,
      columns: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
