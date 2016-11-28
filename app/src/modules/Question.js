import React from 'react';
import { connect, dispatch } from 'react-redux';
import { answerQuestion } from '../actions/actions';
import ChoiceList from './ChoiceList';

const { string, number, bool, array, func } = React.PropTypes;


const Question = React.createClass({
	propTypes: {
    text: string,
    choices: array,
    qid: number,
    correct: bool,
    handleChange: func
  },


  rawHTML()  {
  	return { __html: this.props.text };
  },


  handleChange(e) {
  	this.props.handleChange(e);
  },


  render() {
		return (
    	<li className='quiz-question'>
    		<div id={ `q${ this.props.qid }` } className='quiz-question-text' dangerouslySetInnerHTML={ this.rawHTML() }></div>
		  	<ChoiceList className='quiz-choices' qid={ this.props.qid } choices={ this.props.choices } handleChange={ this.handleChange } />
			</li>
		);
	}
});


module.exports = connect()(Question);
