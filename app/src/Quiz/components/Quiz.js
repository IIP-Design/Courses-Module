import React from 'react';

import QuizLessons from './QuizLessons';
import QuizForm from '../containers/QuizFormContainer';

require('./stylesheets/Quiz.scss');


const { array, string, object } = React.PropTypes;


/*
 * The Quiz component.
 *
 * @since 1.0.0
 */

const Quiz = React.createClass({
  propTypes: {
    courseName: string,
    lessons: array,
    questions: array,
    language: object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


	render() {
    const { lessons,
            language,
            questions,
            courseName } = this.props;

		return (
			<div>
        <QuizLessons lessons={ lessons } language={ language }/>
        <h3 className='quiz-instructions'>{ language.quizQuestions }</h3>
        <p className='quiz-msg'>{ language.quizAttempts }</p> 
        <QuizForm
          questions={ questions }
          courseName={ courseName }
          language={ language } />
      </div>
		);
	}
});


export default Quiz;

