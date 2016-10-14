const React = require('react');
const CourseList 	= require('./CourseList');
const Course = require('./Course');
const Lesson = require('./CourseLesson');
const Quiz = require('./CourseQuiz');
const Certificate = require('./Certificate');
const Instructor = require('./Instructor');
const { Router, Route, hashHistory } = require('react-router');

const App = React.createClass({
  render () {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ CourseList } />
        <Route path='/courses' component={ CourseList } />
        <Route path='/courses/:id' component={ Course } />
        <Route path='/courses/:id/lessons/:id' component={ Lesson } />
        <Route path='/courses/:id/quiz' component={ Quiz } />
        <Route path='/courses/:id/certificate' component={ Certificate } />
        <Route path='/instructors/:id' component={ Instructor } />
      </Router>
    );
  }
});

module.exports = App;
