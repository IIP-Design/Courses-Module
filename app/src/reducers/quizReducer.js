import * as types from '../actions/types';

const initialState = {
  fetching: false,
  fetched: false,
  questions: [],
  disabled: true,
  error: null
};

const quizReducer = (state = initialState, action) => { 
  switch(action.type) {
    case types.FETCH_QUIZ:
      return Object.assign({}, state, action.payload );

     case types.FETCH_QUIZ_ERROR:
     	return 
  }

  return state;
}

module.exports = quizReducer;
