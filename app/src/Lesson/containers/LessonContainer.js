import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Lesson from 'Lesson/components/Lesson';

const { array } = PropTypes;


/**
 * The Lesson container component responsible for
 * interacting with the Redux store and passing state
 * to the Lesson component as props.
 *
 * @param {Object} props - The React props object
 *
 * @since 2.0.0
 */

const LessonContainer = props => <Lesson { ...props } />;


LessonContainer.propTypes = {
  lessons: array
};


/**
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 * @param {String} props.params.lessonSlug - The url slug from the router
 *
 * @return {Object} LessonContainerPropsObject - Data
 * from state mapped to the Lesson component's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app, language }, { match }) => {
  const course = app.data;
  const { lessons, title } = course;
  const { lessonSlug } = match.params;

  const lesson = lessons.filter(lesson => lesson.slug === lessonSlug)[0];
  const index = lessons.findIndex(o => o.id === lesson.id);

  /**
   * @typedef {Object} LessonContainerPropsObject
   * @property {String} courseTitle - The course title from state
   * @property {Number} lessonIndex - The lesson's index from the course.lesons array
   * @property {Array} lessons - The course lessons array
   * @property {Object} lesson - The current lesson object
   *
   * @since 2.0.0
   */

  return {
    courseTitle: title,
    lessonIndex: index,
    lessons,
    lesson,
    language
  };
};


export default connect(mapStateToProps)(LessonContainer);
