import React from 'react';
import { uniqBy } from 'lodash';
import StepsList from 'App/components/StepsList';
import { Link } from 'react-router';

import LessonList from './LessonList';
import InstructorList from './InstructorList';


require('./stylesheets/Course.scss');


const { object } = React.PropTypes;


/*
 * The course component
 *
 * @since 1.0.0
 */

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

    // Return a flat array of unique Instructors by id
    const instructors = _.uniqBy([].concat.apply([], props.course.lessons.map(lesson => lesson.instructors)), instructor => instructor.id);
    const lessons = props.course.lessons;
    const link = lessons[0].slug;

    let src;
    let alt;

    if ('image' in props.course) {
      src = props.course.image.src;
      alt = props.course.image.alt
    }

    return (
      <div>
        <section className='course-intro'>
          <div className='course-intro-feature'>
            <div className='course-intro-image'>
              <img src={ src } alt={ alt } />
              <div className='course-intro-gradient'></div>
            </div>
            <div className='course-intro-text'>
              <h1>{ props.course.title }</h1>
              <p dangerouslySetInnerHTML={ this.rawDescription() }></p>
              <Link to={ `lesson/${ link }` } id={ link }><div className='course-take-course'>{ props.language.courseTake }</div></Link>
            </div>
          </div>
        </section>
        <StepsList language={ props.language } />
        <LessonList lessons={ lessons } language={ props.language } />
        <InstructorList instructors={ instructors } language={ props.language } />
      </div>
    );
  }
});


export default Course;

