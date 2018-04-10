import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';
import { MediaObject } from 'Course/components/dynamic';

require('Course/components/stylesheets/LessonList.scss');


const { array } = PropTypes;


/*
 * The LessonList component
 *
 * @since 1.0.0
 */

const LessonList = props => {
  const { language, lessons } = props;
  const renderLessonList = lesson => {
    const link  = sprintf('%s', lesson.slug );

    return (
      <li className='lessons-list-item' key={ lesson.id }>
        <MediaObject  tag={ 'h3' } link={ `lesson/${ link }` } { ...lesson } />
        <Link to={ `lesson/${ link }` } id={ link }>{ language.takeLesson }</Link>
      </li>
    );
  };

  const lessonList = lessons.map(renderLessonList);

  return (
    <section className='lessons-list'>
      <header>
        <h3>{ language.lessons }</h3>
      </header>
      <ol className='lessons-list__ordered'>
        { lessonList }
      </ol>
    </section>
  );
};


LessonList.propTypes = {
  lessons: array
};


export default LessonList;
