import * as types from '../actions/types';

export function fetchQuiz(data) {
  return {
    type: types.FETCH_QUIZ,
    payload: {
    	questions: data[0].lessons[0].quiz
    }
  };
}

export function fetchQuizError(error) {
  return {
    type: types.FETCH_QUIZ_ERROR,
    payload: {
    	error: error
    }
  };
}

