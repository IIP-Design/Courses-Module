import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import shortid from 'shortid';

require('Course/components/stylesheets/InstructorList.scss');

const { array } = PropTypes;

/*
 * The InstructorList component
 *
 * @since 1.0.0
 */

const InstructorList = props => {
  const { instructors, language } = props;
  const numInstructors = instructors.length;

  const renderInstructor = instructor => {
    const { id, slug, image, title, salutation } = instructor;
    const { src, alt } = image;
    let link = `/instructors/${ slug }`;

    // If there are few than 3 instructors, let them take up one-half the container's width. Otherwise, one-third.
    return (
      <div
        key={ id }
        className={ (numInstructors < 3) ? 'media-object half' : 'media-object one-third' }>
        <Link to={ link }>
          <img src={ src } alt={ alt } />
        </Link>
        <header>
          <Link to={ link }>
            <h4 className='media-object-title'>{ title }</h4>
            <h5 className='media-object-subtitle'>{ salutation }</h5>
          </Link>
        </header>
      </div>
    );
  };

  const instr = language.instructors;  // get language label
  // remove the "s" at end if only 1 instructor
  const instrTitle = (numInstructors > 1 ) ? instr : instr.slice(0, -1);
  const instructorsList = instructors.map(renderInstructor);

  return (
    <section className="instructors-list">
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
