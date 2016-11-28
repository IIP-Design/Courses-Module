import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainLayout from './modules/layouts/MainLayout';
import LessonLayout from './modules/layouts/LessonLayout';

import Course from './modules/Course';
import Lesson from './modules/Lesson';
import Instructor from './modules/Instructor';
import Quiz from './modules/Quiz';
import CertificateForm from './modules/CertificateForm';


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
         <Route path='certificate' component={ CertificateForm } />
      </Route>
    </Route>
  </Router>
);
