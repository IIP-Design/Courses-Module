import { should } from 'chai';

import {
  setUserAnswer,
  incrementNumAttempts,
  resetQuiz
} from 'Quiz/actions';
import { quizReducer } from 'Quiz/reducers';

should();

/**
 * Initial variables
 */

let state;
let newState;
let action;
const initialState = {
  userAnswers: [],
  numAttempts: 0
};


/**
 * Action & Reducer tests
 */

describe('Quiz Actions:', () => {
  describe('SET_USER_ANSWER', () => {
    it('will set an user\'s answer to a question.', () => {
      const questionId = '59df6b83eac47';
      const choiceId = '59df6b84062be';

      // call the action and reducer
      action = setUserAnswer(questionId, choiceId);
      newState = quizReducer(state = initialState, action);

      const prevState = state;

      // assertions
      newState.userAnswers.should.be.an('array');
      newState.userAnswers.length.should.equal(1);
      newState.userAnswers[0].questionId.should.equal('59df6b83eac47');
      newState.userAnswers[0].choiceId.should.equal('59df6b84062be');
      prevState.userAnswers.length.should.equal(0);
    });
  });


  describe('INCREMENT_NUM_ATTEMPTS', () => {
    it('will increase numAttempts by one.', () => {
      // call the action and reducer
      action = incrementNumAttempts();
      newState = quizReducer(state = newState, action);

      const prevState = state;

      // assertions
      newState.userAnswers.should.be.an('array');
      newState.userAnswers.length.should.equal(1);
      newState.numAttempts.should.equal(1);
      prevState.numAttempts.should.equal(0);
    });
  });


  describe('RESET_QUIZ', () => {
    it('will reset the quiz state.', () => {
      // call the action and reducer
      action = resetQuiz();
      newState = quizReducer(state = newState, action);

      const prevState = state;

      // assertions
      newState.userAnswers.length.should.equal(0);
      newState.numAttempts.should.equal(0);
      prevState.userAnswers.length.should.equal(1);
      prevState.numAttempts.should.equal(1);
    });
  });
});
