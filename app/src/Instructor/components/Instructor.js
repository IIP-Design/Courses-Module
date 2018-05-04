import React from 'react';
import PropTypes from 'prop-types';

import styles from 'Instructor/components/stylesheets/Instructor.scss';

const { object } = PropTypes;


/*
 * The Instructor component.
 *
 * @since 1.0.0
 */

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.rawDescription = this.rawDescription.bind(this);
  }


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0, 0);
  }


  rawDescription() {
    return { __html: this.props.instructor.description };
  }


  render() {
    const { title, salutation, image } = this.props.instructor;
    const { src, alt } = image;

    return (
      <div className={ `${ styles.instructor } instructor two-thirds first` }>
        <h1 className={ `${ styles.title } instructor-title` }>{ title }</h1>
        <h2 className={ `${ styles.subtitle } instructor-subtitle` }>{ salutation }</h2>
        <img
          className={ `${ styles.img } instructor-image` }
          src={ src }
          alt={ alt } />
        <div
          className='instructor-description'
          dangerouslySetInnerHTML={ this.rawDescription() } />
      </div>
    );
  }
}


Instructor.propTypes = {
  instructor: object
};


export default Instructor;
