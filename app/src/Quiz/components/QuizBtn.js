import React from 'react';
import PropTypes from 'prop-types';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { string } = PropTypes;


const QuizBtn = (props) => {
  return (
    <input
      type='submit'
      value={ props.value }
      className={ styles.submit } />
  );
};


QuizBtn.propTypes = {
  quizBtn: string
};


export default QuizBtn;
