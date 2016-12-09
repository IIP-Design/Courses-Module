import React from 'react';
import { forEach } from 'lodash';
import shortid from 'shortid';

import Question from '../components/Question';


const { array } = React.PropTypes;


const QuestionList = React.createClass({
	propTypes: {
    questions: array,
  },


  shouldComponentUpdate(nextProps) {
  	return false;
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


export default QuestionList;

