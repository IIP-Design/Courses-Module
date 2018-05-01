import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'root/store';
import routes from 'root/routes';

/*
 * The application's root element
 *
 * @since 1.0.0
 */

const root = document.getElementById('course-container');


/*
 * Render the application
 *
 * @since 1.0.0
 */

ReactDOM.render(
  <Provider store={ store }>{ routes }</Provider>, root
);
