import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Notification } from 'react-notification';
import { keys } from 'lodash';

import QuestionList from './QuestionList';

const { array, string } = React.PropTypes;


/*
 * @todo:
 *    If store is empty, issue call to get store
 *    Need to display question type based on question type
 *    Check for data before rendering or provide a default
 *    Can the user retry the quiz if they fail or should they go back lesson menu?
 */

const QuizForm = React.createClass({
  propTypes: {
    questions: array,
    courseName: string
  },


  getInitialState() {
    return {
      isNotificationActive: false,
      userAnswers: {},
      numAttempts: 0,
      message: 'Please answer all the questions'
    };
  },


  toggleNotification() {
    this.setState({ isNotificationActive: !this.state.isNotificationActive });
  },


  isAllAnswered() {
    return _.keys(this.state.userAnswers).length === this.props.questions.length;
  },


  showCorrectIndicator(id, cls) {
	  const el = document.getElementById(id);

		el.classList.remove('incorrect');
		el.classList.remove('correct');
		el.classList.add(cls);
  },


  goToCertificateScreen() {
    const exitPage = document.getElementById('course-container').getAttribute('data-exit-page');
		const url = this.generateExitLink(exitPage);

   	window.location = url;
  },


  generateExitLink (url) {
    const esc = encodeURIComponent;
    let params = {};
    let a;

    try {
      params = { course: this.props.courseName, tokenName: token.name, tokenValue: token.value };
    } catch (e) {
      params = { course: this.props.courseName };
    }

    const query = Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');

    return ((url) => {
      (!a) ? a = document.createElement('a') : a;
      a.href = `${ url }?${ query }`;
      return a.href;
    })(url);
  },


	isAllCorrect() {
		const questions = this.props.questions;
		let correct = true;
		let index = 0;

		questions.map((question) => {
			const userAnswer = this.state.userAnswers[index];
			const correctAnswer = question.correctAnswers[0];
			const id = 'q' + index;

			if (correctAnswer !== userAnswer) {
				this.showCorrectIndicator(id, 'incorrect');
				correct = false;
			} else {
				this.showCorrectIndicator(id, 'correct');
			}

			index++;
		});

  	return correct;
  },


  handleSubmit(e) {
  	e.preventDefault();

		// All questions not answerecd, show notification
		if(!this.isAllAnswered()) {
		  this.setState({ message: 'Please answer all the questions' });
			this.toggleNotification ();
		}

		// All questions answered correctly, send to cert screen
		else if (this.isAllCorrect())  {
      this.goToCertificateScreen();
		}

		// User got some wrong, if max attempt, redirect to first lesson, else notify
		else {
			if( this.state.numAttempts === 5 ) {
				hashHistory.push(`/lesson/${this.props.lessons[0].slug}`);
			} else {
			  this.setState({
					message: 'Some of your answers are incorrect, please try again' ,
					numAttempts: this.state.numAttempts + 1
				});

				this.toggleNotification ();
			}
		}
  },


  /*
   * Get the question number via the id on the clicked radio choice
   */

  getQuestion(id) {
	  const re = /^q(\d)+c(\d)+$/;
		const match = id.match(re);

		return {
			question: match[1],
			answer: match[2]
		}
  },


  /*
   * We are using the component state to store user responses as opposed to the redux store
   * @todo: Maybe move user responses to store when time permits
   * Activate submit button if num answers is the same as num questions
   * Ensures all questions have been answered
   */

  updateUserResponse(id) {
  	const response = this.getQuestion(id);
  	const answers = this.state.userAnswers;

  	answers[response.question] = response.answer;
  },


  render() {
    const props = this.props;

    return (
      <div>
        <form id='formQuiz' onSubmit={ this.handleSubmit }>
          <div className='quiz-agrmt'>Certificate Agreement <span className='quiz-required'>*</span></div>
          <label htmlFor='certify'>
            <input id='certify' type={'checkbox'} name='certify'/>
            I certify that I have taken all the lessons related to this quiz before obtaining the certificate.
          </label>
          <QuestionList questions={ this.props.questions }/>
          <input type="submit" value="Check Answers" />
        </form>
        <Notification
          isActive={ this.state.isNotificationActive }
          message={ this.state.message }
          action='Dismiss'
          onDismiss={ this.toggleNotification }
          dismissAfter = { 3500 }
          onClick={() =>  this.setState({ isNotificationActive: false })}
        />
      </div>
    );
  }
});




/*
 * Making State available to props
 */

const mapStateToProps = (store) => {
  const quiz = store.quiz;

  return {
  	courseName: store.course.detail.title,
    questions: quiz.questions,
    userAnswers: quiz.userAnswers,
    lessons: store.course.lessons
  };
};


export default QuizForm;

