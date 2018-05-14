import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CourseReactGA from 'react-ga';
import Loadable from 'react-loadable';

import Loading from 'App/components/Loading';
import { MainContainer } from 'App';
import { CourseContainer } from 'Course';


/**
 * Dynamic imports
 *
 * @since tba
 */

const LessonContainer = Loadable({
  loader: () => import(
    /* webpackChunkName: 'LessonContainer' */
    'Lesson/containers/LessonContainer'
  ),
  loading: Loading
});

const InstructorContainer = Loadable({
  loader: () => import(
    /* webpackChunkName: 'InstructorContainer' */
    'Instructor/containers/InstructorContainer'
  ),
  loading: Loading
});

const QuizContainer = Loadable({
  loader: () => import(
    /* webpackChunkName: 'QuizContainer' */
    'Quiz/containers/QuizContainer'
  ),
  loading: Loading
});


/**
 * Initialize Google analytics.  Check for the global object on page
 * If it does not exist, initialize it
 *
 * @todo Figure out use case for fetching a UA code when not already embedded in page
 *
 * @since 2.1.0
 */

function checkForTrackingCode() {
  if (!typeof ga === 'function') {
    CourseReactGA.initialize('[GOOGLE UA CODE]');
  }
}

/**
 * Log the page view to analytics.  Only send information to analytics if on a non-index route.
 * getPathName function will return twice: once for index route and once for component route
 * The component route will return a string with '//' in the path.  We do not want to
 * send analytic data twice so only send data for first string
 *
 * @since 2.1.0
 */

function logPageView() {
  if (this.state) {
    let pathname = getPathName(this.state.location);
    if (!~pathname.indexOf('//')) {
      CourseReactGA.set({ page: pathname });
      CourseReactGA.pageview(pathname);
    } 
  }
}

/**
 * Extract pathname from state location information.
 *
 * @param {Object} location - state location object
 *
 * @since 2.1.0
 */

function getPathName(location) {
  if ( location.pathname === '/') {
   return window.location.pathname;
  }
  return `${window.location.pathname}${location.pathname}/`;
}

checkForTrackingCode();

/**
 * Export the router
 *
 * @since 1.0.0
 */

export default (() => {
  return (
    <MainContainer>
      <Router onUpdate={ logPageView }>
        <Fragment>
          <Route exact path='/' component={ CourseContainer } />
          <Route path='/lesson/:lessonSlug' component={ LessonContainer } />
          <Route path='/instructors/:slug' component={ InstructorContainer } />
          <Route exact path='/quiz' component={ QuizContainer } />
        </Fragment>
      </Router>
    </MainContainer>
  );
})();
