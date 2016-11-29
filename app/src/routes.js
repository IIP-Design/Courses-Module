import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainLayout from './App/components/MainLayout';
import LessonLayout from './App/components/LessonLayout';

import Course from './Course/components/Course';
import Lesson from './Lesson/components/Lesson';
import Instructor from './Instructor/components/Instructor';
import Quiz from './Quiz/components/Quiz';


module.exports = (
  <Router history={ hashHistory }>
    <Route component={ MainLayout }>
      <Route path='/'>
        <IndexRoute  component={ Course }  />
        <Route path='lesson' component={ LessonLayout }>
          <Route path=':lessonSlug' component={ Lesson } />
        </Route>
        <Route path='/instructors/:slug' component={ Instructor } />
        <Route path='quiz' component={ Quiz } />
      </Route>
    </Route>
  </Router>
);
