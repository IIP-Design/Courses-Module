import React from 'react';


const { array, func, number, string } = React.PropTypes;


const RadioChoice = (props) => {
  return (
    <li>
      <label htmlFor={ props.htmlId }>
        <input id={ props.htmlId } name={ `q${ props.qid }` } type={ 'radio' } checked={ props.checked } onChange={ props.handleChange }/>
        { props.choice }
      </label>
    </li>
  );
};


RadioChoice.propTypes = {
  checked: string,
  choice: string,
  handleChange: func,
  htmlId: string,
  qid: number,
  userAnswers: array
};


export default RadioChoice;

