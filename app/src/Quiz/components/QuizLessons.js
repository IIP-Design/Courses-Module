import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const { array } = PropTypes;


/*
 * The QuizLesson component.
 *
 * @since 2.0.0
 */

const renderLesson = (lesson) => {
  const { slug, title } = lesson;
  return (
    <li key={ slug }>
      <Link to={ `lesson/${ slug }` }>
        { title }
      </Link>
    </li>
  );
};


const QuizLessons = (props) => {
  const { lessons, language } = props;
  const { quizLessons } = language;

  const quizLessonsList = lessons.map(lesson => renderLesson(lesson));

  return (
    <div>
      <h3 className='quiz-lessons'>{ quizLessons }:</h3>
      <ul className='quiz-lessons-list'>
        { quizLessonsList }
      </ul>
    </div>
  );
};


QuizLessons.propTypes = {
  lessons: array
};


export default QuizLessons;
