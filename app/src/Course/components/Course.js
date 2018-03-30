import React from 'react';
import StepsList from 'App/components/StepsList';
import { Link } from 'react-router';
import { sortBy, uniqBy, flattenArray } from 'App/helpers';

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
    const { course, language } = this.props;
    const lessons = course.lessons;
    const link = lessons[0].slug;

    // Return a flat array of unique Instructors by id
    const instructors = flattenArray(lessons, 'instructors')
      .sort(sortBy('id', 'desc'))
      .reduce(uniqBy, []);

    let src;
    let alt;

    if ('image' in course) {
      src = course.image.src;
      alt = course.image.alt
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
              <h1>{ course.title }</h1>
              <p dangerouslySetInnerHTML={ this.rawDescription() }></p>
              <Link to={ `lesson/${ link }` } id={ link }><div className='course-take-course'>{ language.courseTake }</div></Link>
            </div>
          </div>
        </section>
        <StepsList language={ language } />
        <LessonList lessons={ lessons } language={ language } />
        <InstructorList instructors={ instructors } language={ language } />
      </div>
    );
  }
});


export default Course;

