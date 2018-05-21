const path = require('path');
const webpack = require('webpack');
const cleanup = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
  const subDir = 'modules/cdp-module-course/';
  let CDP_MODULE_PATH = path.join(__dirname, 'app/dist/');

  if (env) {
    switch (env.BUCKET) {
      case 'dev':
      case 'stage':
        CDP_MODULE_PATH = `https://iip-design-${env.BUCKET}-modules.s3.amazonaws.com/${subDir}`;
        break;

      case 'prod':
        CDP_MODULE_PATH = `https://iipdesignmodules.america.gov/${subDir}`;
        break;

      default:
        CDP_MODULE_PATH = `https://iip-design-dev-modules.s3.amazonaws.com/${subDir}`;
        break;
    }
  }

  return {
    mode: 'production',
    devtool: 'source-map',
    entry: {
      app: [path.join(__dirname, 'app/src', 'index.js')],
      lesson: [path.join(__dirname, 'app/src/Lesson')],
      quiz: [path.join(__dirname, 'app/src/Quiz')]
    },
    output: {
      path: path.join(__dirname, 'app/dist/'),
      publicPath: CDP_MODULE_PATH,
      filename: 'cdp-course-[name].js',
      chunkFilename: 'cdp-course-[name].js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '-'
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
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                minimize: true,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
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
      new MiniCssExtractPlugin({
        filename: 'cdp-course-[name].css',
        chunkFilename: 'cdp-course-[name].css'
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: 'bundle.js.map',
        module: false,
        columns: false
      }),
      new cleanup()
    ]
  };
};
