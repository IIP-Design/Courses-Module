import React from 'react';

import RadioChoice from '../containers/RadioChoiceContainer';


const { number, array, string } = React.PropTypes;


/*
 * The ChoiceList component.
 *
 * @since 1.0.0
 */

const ChoiceList = React.createClass({
	propTypes: {
    choices: array,
    questionId: string,
    className: string
  },


	rawHTML() {
  	return { __html: this.props.text };
  },

  renderChoice(choice) {
    const { id } = choice;
    const { questionId } = this.props;

     return (
      <RadioChoice
        key={ id }
        choiceId={ id }
        questionId={ questionId }
        choice={ choice } />
     );
  },


  render() {
    const { choices } = this.props;

    return (
      <ul>{ choices.map(this.renderChoice) }</ul>
    );
  }
});


export default ChoiceList;

