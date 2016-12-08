import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import { loadState, saveState } from './sessionStorage';
import { appReducer } from './App/reducers';
import { quizReducer } from './Quiz/reducers';


// including thunk middleware in the event we want to return functions for async purposes
const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


// Get redux store from sessionStorage
const persistedState = loadState();


// Combine Reducers
const reducers = combineReducers({
  app: appReducer,
  quiz: quizReducer
});


// @todo: only include devToolsExtension/logger if environment is DEV
const store = createStore(
  reducers,
  persistedState,
  compose(
  	applyMiddleware(...middleware)
  )
);


// Listen for state changes and update state in sessionStorage
store.subscribe(() => {
	saveState(store.getState());
});


module.exports = store;


/* remove redux dev tools temporarily
typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
? window.devToolsExtension()
: f => f
*/
