const { browserslist } = require('./package.json');

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    autoprefixer: {
      browsers: browserslist
    }
  }
};
