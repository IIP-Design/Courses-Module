import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from 'Lesson/components/stylesheets/LessonPagination.scss';

const { array, number } = PropTypes;


/**
 * Build the links for pagination
 *
 * @param {Object} lesson - The current lesson
 * @param {Number} index - The current index from looping through the props.lessons array
 * @param {Number} lessonIndex - The index of the current lesson in the array of lessons
 *
 * @return {Object} Link - React Router Link component, wrapped in <li>'s, with appropriate slug
 *
 * @since 1.0.0
 */

const renderLinks = (lesson, index, lessonIndex) => {
  const c1ass = (index === lessonIndex) ? `${ styles.active }` : '';
  const { slug } = lesson;
  const label = index + 1;

  return (
    <li className={ `${ styles.item } ${ c1ass }` } key={ index }>
      <Link
        to={ slug }
        id={ slug }
        className={ styles.link }>
        { label }
      </Link>
    </li>
  );
};


/**
 * The Lesson pagination component
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const LessonPagination = (props) => {
  const { lessons, lessonIndex } = props;
  const links = lessons.map((lesson, index) => renderLinks(lesson, index, lessonIndex));

  return <ul className={ `${ styles.page } lesson-pagination` }>{ links }</ul>;
};


LessonPagination.propTypes = {
  lessons: array,
  lessonIndex: number
};


export default LessonPagination;
