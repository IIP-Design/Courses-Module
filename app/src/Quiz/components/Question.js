import React from 'react';
import { ChoiceList } from 'Quiz/components/dynamic';

const { string, number, bool, array } = React.PropTypes;


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

