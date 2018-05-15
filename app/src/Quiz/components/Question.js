import React from 'react';
import PropTypes from 'prop-types';

import ChoiceList from 'Quiz/components/ChoiceList';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { string, bool, array } = PropTypes;


/**
 * Render question text
 *
 * @param {Object} props - React props object
 *
 * @since 1.0.0
 */

const rawHTML = props => ({ __html: props.text });


/**
 * The Question component.
 *
 * @since 1.0.0
 */

const Question = (props) => {
  const { questionId, choices } = props;

  return (
    <li className={ `${ styles.question } quiz-question` }>
      <div
        id={ questionId }
        className={ `${ styles.questionText } quiz-question-text` }
        dangerouslySetInnerHTML={ rawHTML(props) } />
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
