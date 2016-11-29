import React from 'react';
import { forEach } from 'lodash';
import shortid from 'shortid';

import Question from './Question';

const { array, func } = React.PropTypes;

const QuestionList = React.createClass({
	propTypes: {
    questions: array,
    handleChange: func
  },


  shouldComponentUpdate(nextProps) {
  	return false;
  },


  handleChange(e) {
  	this.props.handleChange(e.target.id);
  },


  /*
   * Note: Sending qid as Question cannot access key.  We need the qid to construct common group name for each choice
   */

  renderQuestion(question, i) {
    return (
    	<Question
    		key={ shortid.generate() }
    		qid={ i }
    		text={ question.text }
    		choices={ question.choices }
    		handleChange={ this.handleChange }
    	/>
    )
  },


	render() {
		return (
			<ol id="questionList" className='quiz-questions'>
        { this.props.questions.map(this.renderQuestion) }
      </ol>
		);
	}
});


module.exports = QuestionList;
