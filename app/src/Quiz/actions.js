import React from 'react';
import * as types from './actionTypes';


/*
 * Action format
 *
 * {
 *   type: 'STRING',
 *   payload: {},
 *   status: 'success' || 'error'
 * }
 *
 */




/*
 * Set the user answer in the redux store
 *
 * @param questionId (string) - The question id
 * @param error (Object) - An error object
 *
 * @return payload (Object) - The action object sent to the quiz reducer
 */

export function setUserAnswer(questionId=undefined, error=undefined) {
  const re = /^(q\d+)c(\d+)/;
  const match = questionId.match(re);

  if (error) {
    return {
      type: types.SET_USER_ANSWER,
      payload: new Error(),
      status: 'error'
    };
  }

  if (questionId) {
    return {
      type: types.SET_USER_ANSWER,
      payload: {
        userAnswers: [{
          id: questionId,
          question: match[1],
          answer: match[2]
        }]
      },
      status: 'success'
    };
  }
}




/*
 * An action to increment the number of attempts the user has taken the quiz
 *
 * @return (Object) - The action object sent to the quiz reducer
 */

export function incrementNumAttempts() {
  return {
    type: types.INCREMENT_NUM_ATTEMPTS
  }
}




/*
 * An action to reset the user's answers and number number of attempts at submitting the quiz
 *
 * @return (Object) - The action object sent to the quiz reducer
 */

export function resetQuiz() {
  return {
    type: types.RESET_QUIZ,
    payload: {
      userAnswers: [],
      numAttempts: 0
    }
  }
}

