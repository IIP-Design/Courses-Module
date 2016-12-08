import React from 'react';
import ChoiceList from '../components/ChoiceList';

const { string, number, bool, array } = React.PropTypes;


const Question = React.createClass({
	propTypes: {
    text: string,
    choices: array,
    qid: number,
    correct: bool
  },


  rawHTML()  {
  	return { __html: this.props.text };
  },


  render() {
		return (
    	<li className='quiz-question'>
    		<div id={ `q${ this.props.qid }` } className='quiz-question-text' dangerouslySetInnerHTML={ this.rawHTML() }></div>
		  	<ChoiceList className='quiz-choices' qid={ this.props.qid } choices={ this.props.choices }/>
			</li>
		);
	}
});


export default Question;

