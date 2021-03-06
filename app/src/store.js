import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { loadState, saveState } from 'root/sessionStorage';

import { appReducer } from 'App';
import { quizReducer } from 'Quiz';
import { langReducer } from 'Language';


/**
 * Including thunk middleware in the event we want to return functions for async purposes
 *
 * @since 1.0.0
 */

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}


/**
 * Get Redux store from sessionStorage
 *
 * @since 1.0.0
 */

const persistedState = loadState();


/**
 * Combine Redux reducers
 *
 * @since 1.0.0
 */

const reducers = combineReducers({
  app: appReducer,
  quiz: quizReducer,
  language: langReducer
});

/**
 * Add redux development tools for development environment (via browser extension)
 * If the browser extension is not installed, use compose
 *
 * @since 2.1.0
 */

const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Create the Redux store
 *
 * Integrate redux dev tools.
 *
 * @since 1.0.0
 */

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);


// Listen for state changes and update state in sessionStorage
store.subscribe(() => {
  saveState(store.getState());
});


export default store;
