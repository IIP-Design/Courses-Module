const React = require('react');
const { Router, Route, IndexRoute, hashHistory } = require('react-router'); 

// Layouts
const MainLayout = require('./modules/layouts/MainLayout');
const LessonLayout = require('./modules/layouts/LessonLayout');

// Pages
//const CourseList = require('./modules/CourseList');
const Course = require('./modules/Course');
const Lesson = require('./modules/Lesson');
const Instructor = require('./modules/Instructor');
const Quiz = require('./modules/Quiz');
// const Certificate = require('./modules/Certificate');


module.exports = (
  <Router history={ hashHistory }>
    <Route component={ MainLayout }>
      <Route path='/'>
        <IndexRoute staticName={ true } component={ Course } courseId='51' />
        <Route path='lesson' component={ LessonLayout }>
          <Route path=':lessonSlug' staticName={ true } component={ Lesson } />
        </Route>
        <Route path='quiz' component={ Quiz } />
        <Route path='/instructors/:slug' component={ Instructor } />
      </Route>
    </Route>
  </Router>
);
