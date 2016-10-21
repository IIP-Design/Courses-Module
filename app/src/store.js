const { createStore, compose } = require('redux');
const reducers =  require('./reducers');

// only include devToolsExtension if environment is DEV
const store = createStore(
  reducers,
  compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  )
);

module.exports = store;
