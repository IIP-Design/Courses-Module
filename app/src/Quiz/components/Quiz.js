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

class Quiz extends React.Component {
  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  }


	render() {
    const { lessons,
            language,
            questions,
            courseName } = this.props;

    const { quizQuestions, quizAttempts } = language;

		return (
			<div>
        <QuizLessons lessons={ lessons } language={ language } />
        <h3 className='quiz-instructions'>{ quizQuestions }</h3>
        <p className='quiz-msg'>{ quizAttempts }</p> 
        <QuizForm
          questions={ questions }
          courseName={ courseName }
          language={ language } />
      </div>
		);
	}
};


Quiz.propTypes = {
  courseName: string,
  lessons: array,
  questions: array,
  language: object
};


export default Quiz;

