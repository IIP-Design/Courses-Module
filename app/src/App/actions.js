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

export function requestData(data=undefined, error=undefined) {
  if (data === undefined && error === undefined) {
    return {
      type: types.REQUEST_DATA,
      payload: {
        isFetching: true
      }
    };
  }

  if (error) {
    return {
      type: types.REQUEST_DATA,
      payload: {
        isFetching: false,
        data: new Error()
      },
      status: 'error'
    };
  }

  if (data) {
    return {
      type: types.REQUEST_DATA,
      payload: {
        isFetching: false,
        data
      },
      status: 'success'
    };
  }
}

