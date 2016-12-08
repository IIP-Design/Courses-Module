import * as types from './actionTypes';

const initialState = {
  isFetching: true
};

export const appReducer = (state = initialState, action) => {
  if (action.type === types.REQUEST_DATA && action.status) {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

