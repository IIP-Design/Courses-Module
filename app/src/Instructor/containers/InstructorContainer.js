import React from 'react';
import { connect } from 'react-redux';
import { uniqBy, find } from 'lodash';

import Instructor from '../components/Instructor';

const { object } = React.PropTypes;


const InstructorContainer = React.createClass({
  propTypes: {
    params: object
  },


  render() {
    const props = this.props;

    return (
      <Instructor instructor={ props.instructor }/>
    );
  }
});


const mapStateToProps = ({ app }, { params: { slug } }) => {
  // Don't like that this code is basically repeated from Course/components/Course.js line 35
  const instructors = _.uniqBy([].concat.apply([], app.data.lessons.map(lesson => lesson.instructors)), instructor => instructor.id);

  const instructor = _.find(instructors, (instructor) => {
    return slug === instructor.slug;
  });

  return {
    instructor
  };
};


export default connect(mapStateToProps)(InstructorContainer);
