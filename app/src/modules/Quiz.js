const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');
const FormSelect = require('./components/FormSelect');
const QuestionList = require('./QuestionList');
const { array, object, bool } = React.PropTypes;

const Quiz = React.createClass({

  propTypes: {
    questions: array,
    userAnswers: array,
    allAnswered: bool
  },

  renderLesson (lesson) {
    return (
      <li key={ lesson.slug }><Link to={`lesson/${lesson.slug}`}>{ lesson.title }</Link></li>
    )
  },

  checkAnswers () {
    
  },
	
	render () {
		return (
			<div>
        <h3>Answer all questions correctly to get a certificate.</h3>
        <div>Five failed attempts to correctly answer all of the questions will return you to the first lesson.</div>
        <h3>Lessons included on this quiz:</h3>
        <ul> { this.props.lessons.map(this.renderLesson) } </ul>
        <div>Certificate Agreement *</div>
        <FormSelect 
            id='certify'
            type={'checkbox'}
            name='certify' 
            label='I certify that I have taken all the lessons related to this quiz before obtaining the certificate.' 
          />
        <QuestionList questions={ this.props.questions } />
        <input type="button" disabled={ this.props.allAnswered ? false: true } value="Check Answers" onClick={ this.checkAnswers } />
      </div>
		);
	}
});

const mapStateToProps = (store) => {
  const quiz = store.quiz;
  return {
    questions: quiz.questions,
    userAnswers: quiz.userAnswers,
    allAnswered: quiz.questions.length === quiz.userAnswers.length,
    lessons: store.course.lessons
  };
}; 

module.exports = connect(mapStateToProps)(Quiz);

// we need to pull the quiz from each lessson and

// TODOs:
// Need to display question type based on question type
// Check for data before rendering or provide a default
// Can the user retry the quiz if they fail or should they go back lesson menu
