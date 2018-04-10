import React from 'react';
import PropTypes from 'prop-types';

import { RadioChoiceContainer } from 'Quiz/components/dynamic';


const { number, array, string } = PropTypes;


/*
 * The ChoiceList component.
 *
 * @since 1.0.0
 */

const ChoiceList = props => {
  const renderChoice = choice => {
    const { id } = choice;
    return (
      <RadioChoiceContainer
        key={ id }
        choiceId={ id }
        questionId={ questionId }
        choice={ choice } />
    );
  };

  const { choices, questionId } = props;
  const choiceList = choices.map(renderChoice);

  return (
    <ul>{ choiceList }</ul>
  );
};


ChoiceList.propTypes = {
  choices: array,
  questionId: string,
  className: string
};


export default ChoiceList;

