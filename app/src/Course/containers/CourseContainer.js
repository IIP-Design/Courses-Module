import React from 'react';
import { connect } from 'react-redux';

import Course from '../components/Course';


const { object } = React.PropTypes;


const CourseContainer = React.createClass({
  propTypes: {
    course: object
  },


  render() {
    const props = this.props;

    return (
      <Course course={ props.course }/>
    );
  }
});


const mapStateToProps = ({ app }) => {
  const course = app.data;

  return {
    course,
  };
};

export default connect(mapStateToProps)(CourseContainer);

