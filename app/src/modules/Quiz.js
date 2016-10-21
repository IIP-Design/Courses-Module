const React = require('react');
const { connect } = require('react-redux');
const api = require('../api');
const QuestionList = require('./QuestionList');
const { array, bool } = React.PropTypes;

const Quiz = React.createClass({

  propTypes: {
    questions: array,
    disabled: bool
  },

  componentDidMount: function() {
    api.getQuiz();
  },
	
	render () {
		return (
			<div>
        <QuestionList questions={ this.props.questions } />
        <button type="button" disabled={ this.props.disabled }>Check Answers</button>
      </div>
		);
	}
});

const mapStateToProps = (store) => {
  return {
    questions: store.quiz.questions,
    disabled: store.quiz.disabled
  };
}; 



module.exports = connect(mapStateToProps)(Quiz);

// we need to pull the quiz from each lessson and

// TODOs:
// Need to display question type based on question type
// Check for data before rendering or provide a default
// Can the user retry the quiz if they fail or should they go back lesson menu