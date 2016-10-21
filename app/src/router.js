const React = require('react');
const { Router, Route, hashHistory } = require('react-router');

// Layouts
const MainLayout = require('./modules/layouts/MainLayout');

// Pages
const CourseList = require('./modules/CourseList');
const Course = require('./modules/Course');
const Lesson = require('./modules/Lesson');
const Quiz = require('./modules/Quiz');
const Certificate = require('./modules/Certificate');
const Instructor = require('./modules/Instructor');

module.exports = (
  <Router history={ hashHistory }>
    <Route component={ MainLayout }>
      <Route path='/' component={ CourseList } />
      <Route path='/courses' component={ CourseList } />
      <Route path='/courses/:id' component={ Course } />
      <Route path='/courses/:id/lessons/:id' component={ Lesson } />
      <Route path='/courses/:id/quiz' component={ Quiz } />
      <Route path='/courses/:id/certificate' component={ Certificate } />
      <Route path='/instructors/:id' component={ Instructor } />
    </Route>
  </Router>
);
