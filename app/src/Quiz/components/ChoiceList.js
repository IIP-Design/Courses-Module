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
    const id = choice.id;

	 	return (
      <RadioChoice key={ id } choiceId={ id } questionId={ this.props.questionId } choice={ choice } />
	   );
  },


	render() {
    const props = this.props;
		const choices = props.choices

		return (
			<ul>{ choices.map(this.renderChoice) }</ul>
		);
	}
});


export default ChoiceList;

