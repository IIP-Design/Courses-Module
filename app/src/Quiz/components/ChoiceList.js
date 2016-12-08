import React from 'react';
import { forEach } from 'lodash';

import RadioChoice from '../containers/RadioChoiceContainer';


const { number, array, string } = React.PropTypes;


const ChoiceList = React.createClass({
	propTypes: {
    choices: array,
    qid: number,
    className: string
  },


	rawHTML() {
  	return { __html: this.props.text };
  },


  generateArrFromObjectKeys(obj) {
  	const choices = [];

    _.forEach(obj, (value, key) =>  {
			if( value ) {
				 choices.push(value);
				}
		});

		return choices;
  },


	renderChoice(choice, i) {
  	const htmlId = `q${ this.props.qid }c${ i }`;

	 	return (
      <RadioChoice key={ htmlId } htmlId={ htmlId } qid={ this.props.qid } choice={ choice } />
	   );
  },


  /*
   * Was expecting an array of objects per the spec
   * https://github.com/IIP-Design/america-node-api/blob/gh-pages/course.js
   */

	render() {
		const choices = this.generateArrFromObjectKeys(this.props.choices[0]);

		return (
			<ul>{ choices.map(this.renderChoice) }</ul>
		);
	}
});


export default ChoiceList;

