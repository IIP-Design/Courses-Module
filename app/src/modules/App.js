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
        <Route path='courses' staticName={ true } name='Courses'>
          <IndexRoute component={ CourseList } />
          <Route path=':courseId' staticName={ true }>
            <IndexRoute component={ Course } />
            <Route path='lessons/:lessonId' staticName={ true } component={ Lesson } />
            <Route path='quiz' component={ Quiz } />
          </Route>
        </Route>
        <Route path='/instructors/:id' component={ Instructor } />
      </Router>
    );
  }
});

module.exports = App;
