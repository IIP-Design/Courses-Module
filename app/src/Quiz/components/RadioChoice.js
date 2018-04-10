import React from 'react';
import PropTypes from 'prop-types';


const { array, func, number, object, string } = PropTypes;


/*
 * The RadioChoice component
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const RadioChoice = (props) => {
  const { choiceId,
          questionId,
          checked,
          handleChange,
          choice } = props;

  return (
    <li>
      <label htmlFor={ choiceId }>
        <input id={ choiceId } name={ questionId } type={ 'radio' } checked={ checked } onChange={ handleChange }/>
        { choice.text }
      </label>
    </li>
  );
};


RadioChoice.propTypes = {
  checked: string,
  choice: object,
  handleChange: func,
  choiceId: string,
  questionId: string,
  userAnswers: array
};


export default RadioChoice;

