const React = require('react');
const CourseList = require('./CourseList');
const Course = require('./Course');
const Lesson = require('./Lesson');
const Quiz = require('./Quiz');
const Certificate = require('./Certificate');
const Instructor = require('./Instructor');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const App = React.createClass({
  render: function() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ CourseList } />
        <Route path='courses'>
          <IndexRoute component={ CourseList } />
          <Route path=':courseId'>
            <IndexRoute component={ Course } />
            <Route path='lessons/:lessonId' component={ Lesson } />
          </Route>
        </Route>
        <Route path='/courses/:id/quiz' component={ Quiz } />
        <Route path='/courses/:id/certificate' component={ Certificate } />
        <Route path='/instructors/:id' component={ Instructor } />
      </Router>
    );
  }
});

module.exports = App;
