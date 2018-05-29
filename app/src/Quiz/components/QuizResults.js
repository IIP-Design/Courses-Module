import React from 'react';
import PropTypes from 'prop-types';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { number, string } = PropTypes;


/**
 * The QuizResults component
 *
 * @param {Object} props - React props object 
 *
 * @since tba
 */

const QuizResults = (props) => {
  const {
    numIncorrect,
    quizWrong,
    quizAttemptsRemain,
    maxAttempts,
    numAttempts,
    quizAttempts
  } = props;

  return (
    <div className={ styles.results }>
      <p className={ styles.incorrect }>
        { numIncorrect } { quizWrong }
      </p>
      <p className={ styles.attempts }>
        { quizAttemptsRemain }: { maxAttempts - numAttempts } - { quizAttempts }
      </p>
    </div>
  );
};


QuizResults.propTypes = {
  numIncorrect: number,
  quizWrong: string,
  quizAttemptsRemain: string,
  maxAttempts: number,
  numAttempts: number,
  quizAttempts: string
};


export default QuizResults;