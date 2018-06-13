import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { flattenArray } from 'App/helpers';
import { incrementNumAttempts, resetQuiz } from 'Quiz/actions';

import QuizForm from 'Quiz/components/QuizForm';

const { array, func, number, string } = PropTypes;


/**
 * The container component responsible for interacting with the Redux store.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const QuizFormContainer = props => <QuizForm { ...props } />;


QuizFormContainer.propTypes = {
  userAnswers: array,
  numAttempts: number,
  slug: string,
  lessons: array,
  questions: array,
  incrementNumAttempts: func,
  resetQuiz: func
};


/**
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - State of the app as it appears in redux
 * @param {Object} state.quiz - State of the quiz as it appears in redux
 *
 * @return {Object} QuizFormContainerStatePropsObject - Data from state mapped to the QuizFormContainer's props
 */

const mapStateToProps = ({ quiz, app }) => {
  const { userAnswers, numAttempts } = quiz;
  const { slug, lessons } = app.data;
  const questions = flattenArray(lessons, 'quiz');

  /**
   * @typedef {Object} QuizFormContainerStatePropsObject
   * @property {Array} userAnswers - The users answers
   * @property {Number} numAttempts - The number of times the user has tried to submit the quiz
   * @property {String} slug - The slug of the current course
   * @property {Array} lessons - The course lessons
   * @property {Array} questions - The course quiz questions
   */

  return {
    slug,
    userAnswers,
    numAttempts,
    lessons,
    questions
  };
};


/**
 * Standard Redux mapDispatchToProps function.
 *
 * @param {Function} dispatch - Redux dispatch function
 *
 * @return {Object} QuizContainerDispatchPropsObject - Object
 * of callback functions mapped to the QuizFormContainer's props
 */

const mapDispatchToProps = (dispatch) => {

  /**
   * @typedef {Object} QuizContainerDispatchPropsObject
   * @property {Function} incrementNumAttempts - Increments numAttempts in state
   * @property {Function} resetQuiz - Reset the quiz information in state
   */

  return {
    incrementNumAttempts: () => {
      dispatch(incrementNumAttempts());
    },

    resetQuiz: () => {
      dispatch(resetQuiz());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuizFormContainer);
