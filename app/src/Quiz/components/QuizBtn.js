import React from 'react';


const { string } = React.PropTypes;


const QuizBtn = props => <input type="submit" value={ props.value } />;


QuizBtn.propTypes = {
  quizBtn: string
};


export default QuizBtn;