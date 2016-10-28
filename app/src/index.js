const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const store = require('./store');
const router = require('./router');

const root = document.getElementById('course-container');

// Temporary until Redux in place
// const courseId = localStorage.getItem('courseId');

// if (courseId === null || courseId !== root.dataset.courseId) {
//   localStorage.setItem('courseId', root.dataset.courseId);
// }

// Provider is a top-level component that wraps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render (
  <Provider store={ store }>{ router }</Provider>,
  root
);