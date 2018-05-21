import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import Loading from 'App/components/Loading';
import QuizLessons from 'Quiz/components/QuizLessons';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { array, string, object } = PropTypes;


/**
 * Dynamic imports
 *
 * @since tba
 */

const QuizFormContainer = Loadable({
  loader: () => import(
    /* webpackChunkName: 'QuizFormContainer' */
    'Quiz/containers/QuizFormContainer'
  ),
  loading: Loading
});


/**
 * The Quiz component.
 *
 * @since 1.0.0
 */

class Quiz extends React.Component {
  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0, 0);
  }


  render() {
    const {
      lessons,
      language,
      questions,
      courseName
    } = this.props;

    const { quizQuestions, quizAttempts } = language;

    return (
      <section>
        <header>
          <QuizLessons lessons={ lessons } language={ language } />
          <h3 className={ `${ styles.instructions } quiz-instructions` }>{ quizQuestions }</h3>
          <p className={ `${ styles.msg } quiz-msg` }>{ quizAttempts }</p>
        </header>
        <QuizFormContainer
          questions={ questions }
          courseName={ courseName }
          language={ language } />
      </section>
    );
  }
}


Quiz.propTypes = {
  courseName: string,
  lessons: array,
  questions: array,
  language: object
};


export default Quiz;
