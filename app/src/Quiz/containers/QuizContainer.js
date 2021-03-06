import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { flattenArray } from 'App/helpers';

import Quiz from 'Quiz/components/Quiz';

const { array, string } = PropTypes;


/**
 * The container component responsible for interacting with the Redux store.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const QuizContainer = props => <Quiz { ...props } />;


QuizContainer.propTypes = {
  courseName: string,
  lessons: array,
  questions: array
};


/**
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 *
 * @return {Object} QuizContainerPropsObject - Data from state mapped to the QuizContainer's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app, language }) => {
  const { title, lessons } = app.data;
  const questions = flattenArray(lessons, 'quiz');

  /**
   * @typedef {Object} QuizContainerPropsObject
   * @property {String} courseName - The name of the course
   * @property {Array} lessons - The course lessons
   * @property {Array} questions - The course quiz questions
   */

  return {
    courseName: title,
    lessons,
    questions,
    language
  };
};


export default connect(mapStateToProps)(QuizContainer);
