import React from 'react';
import { uniqBy } from 'lodash';

import LessonList from './LessonList';
import InstructorList from './InstructorList';
import StepsList from '../../App/components/StepsList';

require('./stylesheets/Course.scss');


const { object } = React.PropTypes;


const Course = React.createClass({
  propTypes: {
    course: object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  rawDescription() {
    return { __html: this.props.course.description };
  },


  render() {
    const props = this.props;

    // Return a flat array of uniq Instructors by id
    const instructors = _.uniqBy([].concat.apply([], props.course.lessons.map(lesson => lesson.instructors)), instructor => instructor.id);
    const lessons = props.course.lessons;

    let src = '';
    let alt = '';

    props.course.image ? src = props.course.image.src : src = undefined;
    props.course.image ? alt = props.course.image.alt : alt = undefined;

    return (
      <div>
        <section className='course-intro'>
          <div className='course-intro-feature'>
            <div className='course-intro-image'>
              <img src={ src } alt={ alt } />
              <div className='course-intro-gradient'></div>
            </div>
            <div className='course-intro-text'>
              <h1>{ props.course.title  }</h1>
              <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
            </div>
          </div>
        </section>
        <StepsList />
        <LessonList lessons={ lessons } />
        <InstructorList instructors={ instructors } />
      </div>
    );
  }
});


module.exports = Course;

