import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainContainer from './App/containers/MainContainer';
import LessonLayout from './App/components/LessonLayout';

import CourseContainer from './Course/containers/CourseContainer';
import LessonContainer from './Lesson/containers/LessonContainer';
import InstructorContainer from './Instructor/containers/InstructorContainer';
import Quiz from './Quiz/components/Quiz';


module.exports = (
  <Router history={ hashHistory }>
    <Route component={ MainContainer }>
      <Route path='/'>
        <IndexRoute component={ CourseContainer }  />
        <Route path='lesson' component={ LessonLayout }>
          <Route path=':lessonSlug' component={ LessonContainer } />
        </Route>
        <Route path='/instructors/:slug' component={ InstructorContainer } />
        <Route path='quiz' component={ Quiz } />
      </Route>
    </Route>
  </Router>
);
