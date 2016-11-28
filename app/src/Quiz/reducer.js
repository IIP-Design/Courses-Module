import { find } from 'lodash';
import * as types from './actionTypes';


const initialState = {
  questions: [],
  userAnswers: [],
  numAttempts: 0
};


/*
 * If question has already been answered, update answer else just add to new response to array
 */

const update = (state, response) => {
	const userAnswers = state.userAnswers.slice(0);
  const userAnswer = _.find(userAnswers, (o) => o.question == response.question);

	if (userAnswer) {
		userAnswer.answer = response.answer;
	} else {
		userAnswers.push(response);
	}

	return userAnswers;
}


/*
 * @todo: use the object spread operatr
 */

const quizReducer = (state = initialState, action) => {
	switch(action.type) {
    case types.SET_QUIZ:
      return Object.assign({}, state, action.payload);

    case types.ANSWER_QUESTION:
    	return Object.assign({}, state, {
    		userAnswers: update(state, action.payload)
    	});
  }

  return state;
}

/*
 * Babel-plugin-transform-object-rest-spread
 */


module.exports = quizReducer;

