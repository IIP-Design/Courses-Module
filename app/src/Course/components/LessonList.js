import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';

import { MediaObject } from 'App';

import styles from 'Course/components/stylesheets/LessonList.scss';

const { array } = PropTypes;


/**
 * Render list of lessons
 *
 * @param {Object} lesson - individual lesson
 * @param {Object} language - object of language text
 *
 * @since 2.2.0
 */

const renderLessonList = (lesson, language) => {
  const link = sprintf('%s', lesson.slug);

  return (
    <li className={ `${ styles.item } lessons-list-item` } key={ lesson.id }>
      <MediaObject tag='h3' link={ `/lesson/${ link }` } { ...lesson } className={ styles.object } />
      <Link
        to={ `/lesson/${ link }` }
        id={ link }
        className={ styles.cta }>{ language.takeLesson }</Link>
    </li>
  );
};


/**
 * The LessonList component
 *
 * @since 1.0.0
 */

const LessonList = (props) => {
  const { language, lessons } = props;

  const lessonList = lessons.map(lesson => renderLessonList(lesson, language));

  return (
    <section className={ `${ styles.lessons } lessons-list` }>
      <header>
        <h3>{ language.lessons }</h3>
      </header>
      <ol className={ `${ styles.ordered } lessons-list__ordered` }>
        { lessonList }
      </ol>
    </section>
  );
};


LessonList.propTypes = {
  lessons: array
};


export default LessonList;
