import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import CourseReactGA from 'react-ga';
import Loadable from 'react-loadable';

import Loading from 'App/components/Loading';
import { MainContainer } from 'App';


/**
 * Dynamic imports
 *
 * @since tba
 */

const CourseContainer = Loadable({
  loader: () => import(
    /* webpackChunkName: 'CourseContainer' */
    'Course/containers/CourseContainer'
  ),
  loading: Loading
});

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

checkForTrackingCode();


/**
 * Log the page view to analytics. Only send information
 * to analytics if on a non-index route.
 *
 * @since 2.1.0
 */

function logPageView(location) {
  if (location) {
    const { pathname } = location;
    if (pathname !== '/') {
      CourseReactGA.set({ page: pathname });
      CourseReactGA.pageview(pathname);
    }
  }
}

const history = createHashHistory();
history.listen(logPageView);


/**
 * The App
 *
 * @since 1.0.0
 */

const Routes = () => (
  <MainContainer>
    <Router history={ history }>
      <Switch>
        <Route exact path='/' component={ CourseContainer } />
        <Route path='/lesson/:lessonSlug' component={ LessonContainer } />
        <Route path='/instructors/:slug' component={ InstructorContainer } />
        <Route exact path='/quiz' component={ QuizContainer } />
      </Switch>
    </Router>
  </MainContainer>
);

export default Routes;
