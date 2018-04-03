import React from 'react';

import RadioChoice from '../containers/RadioChoiceContainer';


const { number, array, string } = React.PropTypes;


/*
 * The ChoiceList component.
 *
 * @since 1.0.0
 */

const ChoiceList = props => {
  const renderChoice = choice => {
    const { id } = choice;
    return (
      <RadioChoice
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

