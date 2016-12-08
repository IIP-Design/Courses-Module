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


export function incrementNumAttempts() {
  return {
    type: types.INCREMENT_NUM_ATTEMPTS
  }
}
