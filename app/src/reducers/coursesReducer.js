import * as types from '../actions/types';

const initialState = {
  courses: []
};

const coursesReducer = (state = initialState, action) =>  { 
  
  switch(action.type) {
    case types.FETCH_COURSES:
      return Object.assign({}, state, action.payload);
  }

  return state;
}

module.exports = coursesReducer;