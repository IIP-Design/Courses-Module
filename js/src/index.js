const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./modules/App');

if (process.env.NODE_ENV === 'development') {
  var data = require('./course-data');
}

ReactDOM.render(
  <App data={ data } />,
  document.getElementById('course-container')
);