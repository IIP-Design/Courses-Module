import React from 'react';
import PropTypes from 'prop-types';

import RadioChoiceContainer from 'Quiz/containers/RadioChoiceContainer';

const { array, string } = PropTypes;


/**
 * Render an individual answer choice
 *
 * @param {Object} choice - individual answer choice
 * @param {String} questionId - the question's id
 *
 * @since 2.2.0
 */

const renderChoice = (choice, questionId) => {
  const { id } = choice;
  return (
    <RadioChoiceContainer
      key={ id }
      choiceId={ id }
      questionId={ questionId }
      choice={ choice } />
  );
};

/**
 * The ChoiceList component.
 *
 * @since 1.0.0
 */

const ChoiceList = (props) => {
  const { choices, questionId } = props;
  const choiceList = choices.map(choice => renderChoice(choice, questionId));

  return <ul>{ choiceList }</ul>;
};


ChoiceList.propTypes = {
  choices: array,
  questionId: string,
  className: string
};


export default ChoiceList;
