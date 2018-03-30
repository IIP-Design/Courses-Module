module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'autoprefixer': {
      browsers: ['> 1%', 'last 3 IE versions']
    }
  }
}