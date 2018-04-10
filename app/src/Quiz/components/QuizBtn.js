import React from 'react';
import PropTypes from 'prop-types';


const { string } = PropTypes;


const QuizBtn = props => <input type="submit" value={ props.value } />;


QuizBtn.propTypes = {
  quizBtn: string
};


export default QuizBtn;