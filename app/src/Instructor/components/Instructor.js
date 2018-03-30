import React from 'react'

require('./stylesheets/Instructor.scss');

const { object } = React.PropTypes;


/*
 * The Instructor component.
 *
 * @since 1.0.0
 */

const Instructor = React.createClass({
  propTypes: {
    instructor: object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  rawDescription() {
    return { __html: this.props.instructor.description };
  },


  render() {
    const { title, salutation, image } = this.props.instructor;

    return (
      <div className='instructor two-thirds first'>
        <h1 className='instructor-title'>{ title }</h1>
        <h3 className='instructor-subtitle'>{ salutation }</h3>
        <img className='instructor-image' src={ image.src } alt={ image.alt } />
        <div className='instructor-description' dangerouslySetInnerHTML={ this.rawDescription() }></div>
      </div>
    );
  }
});


export default Instructor;

