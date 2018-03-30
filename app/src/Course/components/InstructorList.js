import React from 'react';
import { Link } from 'react-router';
import shortid from 'shortid';
import MediaObject from 'App/components/MediaObject';

require('./stylesheets/InstructorList.scss');


/*
 * The InstructorList component
 *
 * @since 1.0.0
 */

const InstructorList = React.createClass({
  propTypes: {
    instructors: React.PropTypes.array
  },


  render() {
    const numInstructors = this.props.instructors.length;   
    const instr = this.props.language.instructors;  // get language label

    // remove the "s" at end if only 1 instructor
    const instrTitle = (numInstructors > 1 ) ? instr : instr.slice(0, -1);
    const instructors = this.props.instructors.map((instructor) => {
      const { id, slug, image, title, salutation } = instructor;
      let link = `/instructors/${ slug }`;

      // If there are few than 3 instructors, let them take up one-half the container's width. Otherwise, one-third.
      return (
        <div
          key={ id }
          className={ (numInstructors < 3) ? 'media-object half' : 'media-object one-third' }>
          <Link to={ link }>
            <img src={ image.src } alt={ image.alt } />
          </Link>
          <header>
            <Link to={ link }>
              <h4 className='media-object-title'>{ title }</h4>
              <h5 className='media-object-subtitle'>{ salutation }</h5>
            </Link>
          </header>
        </div>
      );
    });

    return (
      <section className="instructors-list">
        <header>
          <h3>{ instrTitle }</h3>
        </header>
        { instructors }
      </section>
    );
  }
});


export default InstructorList;

