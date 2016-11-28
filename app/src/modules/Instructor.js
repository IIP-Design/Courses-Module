import React from 'react'
import { connect } from 'react-redux';
import { find } from 'lodash';

const mapStateToProps = (state, { params: { slug } }) => {
  const instructor = _.find(state.course.instructors, (instructor) => {
    return slug === instructor.slug;
  });

  return { slug, instructor }
};


const Instructor = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  rawDescription() {
    return { __html: this.props.instructor.description };
  },


  render() {
    const props = this.props;

    return (
      <div className='two-thirds first'>
        <h1>{ props.instructor.title }</h1>
        <img src={ props.instructor.image.src } alt={ props.instructor.image.alt } />
        <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
      </div>
    );
  }
});


module.exports = connect(mapStateToProps)(Instructor);
