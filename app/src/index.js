const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./modules/App');
const root = document.getElementById('course-container');
ReactDOM.render(
  <App { ...root.dataset } />,
  root
);
