const package = require('./package.json');

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'autoprefixer': {
      browsers: package.browserslist
    }
  }
}