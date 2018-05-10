import React, { Fragment } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { sortBy, uniqBy, flattenArray } from 'App/helpers';

import StepsList from 'App/components/StepsList';
import LessonList from 'Course/components/LessonList';
import InstructorList from 'Course/components/InstructorList';

import styles from 'Course/components/stylesheets/Course.scss';

const { object } = PropTypes;


/**
 * The course component
 *
 * @since 1.0.0
 */

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.rawDescription = this.rawDescription.bind(this);
  }


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0, 0);
  }


  rawDescription() {
    return { __html: this.props.course.description };
  }


  render() {
    const { course, language } = this.props;
    const { lessons } = course;
    const link = lessons[0].slug;

    // Return a flat array of unique Instructors by id
    const instructors = flattenArray(lessons, 'instructors')
      .sort(sortBy('id', 'desc'))
      .reduce(uniqBy, []);

    let src;
    let alt;

    if ('image' in course) {
      src = course.image.src;
      alt = course.image.alt;
    }

    return (
      <Fragment>
        <section className={ `${ styles.intro } course-intro` }>
          <div className={ `${ styles.feature } course-intro-feature` }>
            <div className={ `${ styles.img } course-intro-image` }>
              <img src={ src } alt={ alt } />
              <div className={ `${ styles.gradient } course-intro-gradient` } />
            </div>
            <div className={ `${ styles.text } course-intro-text` }>
              <h1>{ course.title }</h1>
              <p dangerouslySetInnerHTML={ this.rawDescription() } />
              <Link
                to={ `lesson/${ link }` }
                id={ link }
                className={ `${ styles.cta} course-take-course` }>
                { language.courseTake }
              </Link>
            </div>
          </div>
        </section>
        <StepsList language={ language } />
        <LessonList
          lessons={ lessons }
          language={ language } />
        <InstructorList
          instructors={ instructors }
          language={ language } />
      </Fragment>
    );
  }
}


Course.propTypes = {
  course: object
};


export default Course;
