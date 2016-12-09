import React from 'react';
import { Link } from 'react-router';

require('./stylesheets/LessonPagination.scss');

const { array, number } = React.PropTypes;


const getLinks = (lesson, index, lessonIndex) => {
  const c1ass = ( index === lessonIndex ) ? 'active' : '';
  const slug = lesson.slug;
  const label = index + 1;

  return (
    <li className={ c1ass } key={ index }>
      <Link to={ `lesson/${ slug }` } id={ slug }>{ label }</Link>
    </li>
  );
};


const LessonPagination = (props) => {
  const links = props.lessons.map((lesson, index) => getLinks(lesson, index, props.lessonIndex));

  return (
    <ul className='lesson-pagination'>
      { links }
    </ul>
  );
};


LessonPagination.propTypes = {
  lessons: array,
  lessonIndex: number
};


export default LessonPagination;

