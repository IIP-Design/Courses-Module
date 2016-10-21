var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  context: __dirname,
  entry: "./app/src",
  output: {
    path: path.join(__dirname, "app/src"),
    publicPath: '/app/src',
    filename: 'packed.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  eslint: {
    configFile: './.eslintrc'
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
     // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: [/node_modules/, /js\/src\/course?/],  // don't lint the course data file
    //     loader: 'eslint-loader'
    //   }
    // ],
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
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: '127.0.0.1:8080'
      },
      {
        reload: false  // true
      }
    )
  ],
  postcss: function() {
    return [ autoprefixer({ browsers: ['> 1%', 'last 3 IE versions'] }) ]
  }
};
