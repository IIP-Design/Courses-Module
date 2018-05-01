import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const { array, number } = PropTypes;


/*
 * Build the link to the next/previous lesson
 *
 * @param {Array} lessons - The array of lessons in the current course
 * @param {Number} lessonIndex - The index of the current lesson in the array of lessons
 * @param {Number} index - If "previous lesson" selected,
 * value will be -1. If "next lesson" selected, value will be 1
 * @param {String} label - The linked text
 *
 * @return {Object} Link - React Router Link component with appropriate slug
 *
 * @since 1.0.0
 */

const renderLink = (lessons, lessonIndex, index, label) => {
  const goToIndex = lessonIndex + index;
  const { slug } = lessons[goToIndex];

  return (
    <Link to={ `lesson/${ slug }` } id={ slug }>{ label }</Link>
  );
};


/*
 * The next/previous/quiz button navigation on a lesson
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const ButtonNav = (props) => {
  const { lessons, lessonIndex, language } = props;
  const { prevLesson, nextLesson, quizGo } = language;
  const numLessons = lessons.length - 1;

  if (lessons.length === 1) {
    return (
      <div className='lesson-buttonnav'>
        <Link to='quiz'>{ quizGo }</Link>
      </div>
    );
  }

  // If the last lesson, display previous and quiz buttons
  if (lessonIndex === numLessons) {
    return (
      <div className='lesson-buttonnav'>
        { renderLink(lessons, lessonIndex, -1, prevLesson) }
        <Link to='quiz'>{ quizGo }</Link>
      </div>
    );
  }

  // If the first lesson, only display next button
  if (lessonIndex === 0) {
    return (
      <div className='lesson-buttonnav'>
         { renderLink(lessons, lessonIndex, 1, nextLesson) }
      </div>
    );
  }

  // Otherwise display both next and previous buttons
  if (lessonIndex !== 0 && lessonIndex !== numLessons) {
    return (
      <div className='lesson-buttonnav'>
        { renderLink(lessons, lessonIndex, -1, prevLesson) }
        { renderLink(lessons, lessonIndex, 1, nextLesson) }
      </div>
    );
  }
};


ButtonNav.propTypes = {
  lessons: array,
  lessonIndex: number
};


export default ButtonNav;
