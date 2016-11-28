import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

const root = document.getElementById('course-container');

ReactDOM.render(
  <Provider store={ store }>{ routes }</Provider>, root
);

