import * as types from 'App/actionTypes';


/*
 * App's initialState set isFetching
 *
 * @since 2.0.0
 */

const initialState = {
  isFetching: true
};


const dispatchOnReadyEvent = () => {
  const event = new CustomEvent('onReadyModule', { bubbles: true,  cancelable: true });
  console.log('LOG: dispatch event - onReadyModule');
  dispatchEvent(event);
};

/*
 * The App's redux reducer
 *
 * @param {Object} state - The App component's current state
 * @param {Object} action - An action object indicating App's new state
 *
 * @return {Object} state - The new state of the application, saved in the Redux store
 *
 * @since 2.0.0
 */

export const appReducer = (state = initialState, action) => {
  if (action.type === types.REQUEST_DATA && action.status) {
    if (action.status === 'success' ) {
      dispatchOnReadyEvent();
    }
    return Object.assign({}, state, action.payload);
  }

  return state;
};
