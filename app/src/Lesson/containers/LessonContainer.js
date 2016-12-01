import React from 'react';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';

import Lesson from '../components/Lesson';


const { array } = React.PropTypes;


const LessonContainer = React.createClass({
  propTypes: {
    lessons: array
  },


  render() {
    const props = this.props;

    return (
      <Lesson { ...props }/>
    );
  }
});


const mapStateToProps = ({ app }, { params: { lessonSlug } }) => {
  const course = app.data;
  const lessons = course.lessons;
  const lesson = lessons.filter(lesson => lesson.slug === lessonSlug)[0];
  const index = _.findIndex(lessons, o => o.id == lesson.id);

  return {
    courseTitle: course.title,
    lessonIndex: index,
    lessons,
    lesson
  };
};


export default connect(mapStateToProps)(LessonContainer);

