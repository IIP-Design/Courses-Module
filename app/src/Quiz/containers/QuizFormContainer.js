import React from 'react';
import { connect } from 'react-redux';

import { incrementNumAttempts, resetQuiz } from '../actions';
import QuizForm from '../components/QuizForm';


/*
 * PropType constants
 */

const { array, func, number, string } = React.PropTypes;




/*
 * The QuizForm container
 */

const QuizFormContainer = (props) => <QuizForm { ...props }/>;


QuizFormContainer.propTypes = {
  userAnswers: array,
  numAttempts: number,
  courseName: string,
  lessons: array,
  questions: array,
  incrementNumAttempts: func,
  resetQuiz: func
};




/*
 * Map what's stored in state to props
 *
 * @param state.app (Object) - State of the app as it appears in redux
 * @param state.quiz (Object) - State of the quiz as it appears in redux
 *
 * @return (Object) - Assembled parts of state returned as an object
 */

const mapStateToProps = ({ quiz, app }) => {
  const userAnswers = quiz.userAnswers;
  const numAttempts = quiz.numAttempts;
  const courseName = app.data.title;
  const lessons = app.data.lessons;
  const questions = [].concat.apply([], lessons.map(lesson => lesson.quiz));

  return {
    userAnswers,
    numAttempts,
    courseName,
    lessons,
    questions
  };
};




/*
 * Map callback functions that trigger an action to props
 *
 * @param dispatch (Function) - Dispatch an action
 *
 * @return (Object) - Object of dispatch functions
 */

const mapDispatchToProps = (dispatch) => {
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

