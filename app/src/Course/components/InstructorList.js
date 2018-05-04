import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import styles from 'Course/components/stylesheets/InstructorList.scss';

const { array } = PropTypes;


/*
 * The InstructorList component
 *
 * @since 1.0.0
 */

const renderInstructor = (instructor, numInstructors) => {
  const { id, slug, image, title, salutation } = instructor;
  const { src, alt } = image;
  let link = `/instructors/${ slug }`;

  /**
   * If there are few than 3 instructors, let them
   * take up one-half the container's width.
   * Otherwise, one-third.
   */
  const instrWidth = (numInstructors < 3) ? styles.half : styles.oneThird;

  return (
    <div
      key={ id }
      className={ `${ styles.instructor } media-object ${ instrWidth }` }>
      <Link to={ link }>
        <img src={ src } alt={ alt } className={ styles.img } />
      </Link>
      <header className={ styles.header }>
        <Link to={ link }>
          <h4 className={ `${ styles.title } media-object-title` }>{ title }</h4>
          <h5 className={ `${ styles.subtitle } media-object-subtitle` }>{ salutation }</h5>
        </Link>
      </header>
    </div>
  );
};


const InstructorList = (props) => {
  const { instructors, language } = props;
  const numInstructors = instructors.length;

  const instr = language.instructors; // get language label
  // remove the "s" at end if only 1 instructor
  const instrTitle = (numInstructors > 1) ? instr : instr.slice(0, -1);
  const instructorsList = instructors.map(instructor => renderInstructor(instructor, numInstructors));

  return (
    <section className={ `${ styles.instructors } instructors-list` }>
      <header>
        <h3>{ instrTitle }</h3>
      </header>
      { instructorsList }
    </section>
  );
};


InstructorList.propTypes = {
  instructors: array
};


export default InstructorList;
