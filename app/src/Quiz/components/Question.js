import React from 'react';
import PropTypes from 'prop-types';

import ChoiceList from 'Quiz/components/ChoiceList';

const { string, number, bool, array } = PropTypes;


/*
 * The Question component.
 *
 * @since 1.0.0
 */

const Question = props => {
  const rawHTML = props => {
    return { __html: props.text };
  }

  const { questionId, choices } = props;

  return (
    <li className='quiz-question'>
      <div
        id={ questionId }
        className='quiz-question-text'
        dangerouslySetInnerHTML={ rawHTML(props) }></div>
      <ChoiceList
        className='quiz-choices'
        questionId={ questionId }
        choices={ choices } />
    </li>
  );
};


Question.propTypes = {
  text: string,
  choices: array,
  questionId: string,
  correct: bool
};


export default Question;

