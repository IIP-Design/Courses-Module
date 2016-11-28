import * as types from './actionTypes';


/*
 * Let app know data being fetched
 */

export function fetchRequest() {
  return {
    type: types.FETCH_REQUEST,
    payload: {
      isFetching: true
    }
  };
}


/*
 * let app know data error occurred during fetch
 */

export function fetchError(error) {
  return {
    type: types.FETCH_ERROR,
    payload: {
      error: error,
      isFetching: false
    }
  };
}

