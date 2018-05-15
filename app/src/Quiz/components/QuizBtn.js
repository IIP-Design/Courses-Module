import React from 'react';
import PropTypes from 'prop-types';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { string } = PropTypes;


/**
 * Quiz Button component
 *
 * @param {Object} props - React props object
 *
 * @since tba
 */

const QuizBtn = props => (
  <input
    type='submit'
    value={ props.value }
    className={ styles.submit } />
);


QuizBtn.propTypes = {
  quizBtn: string
};


export default QuizBtn;
