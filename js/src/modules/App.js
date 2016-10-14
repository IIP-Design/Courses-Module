const React = require('react');
const CourseList 	= require('./CourseList');
const Course = require('./Course');
const Lesson = require('./CourseLesson');
const Quiz = require('./CourseQuiz');
const Certificate = require('./Certificate');
const Instructor = require('./Instructor');
const { Router, Route, hashHistory } = require('react-router');

const App = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  getCourse (nextState, replace) {
    const courseArray = this.props.data.filter((course) => Number(course.id) === Number(nextState.params.id));

    if (courseArray.length < 1) {
      return replace('/courses');  // redirect to course list if no match is found
    }

    Object.assign(nextState.params, courseArray[0]);
  },

  getInstructor (nextState, replace) {
    const instructorArray = [];

    this.props.data.forEach((course) => {
      course.lessons.forEach((lesson) => {
        lesson.instructors.forEach((instructor) => {
          if (Number(instructor.id) === Number(nextState.params.id)) {
            instructorArray.push(instructor);
          }
        });
      });
    });

    if (instructorArray.length < 1) {
      return replace('/');  // redirect to course list if no match is found
    }

    Object.assign(nextState.params, instructorArray[0]);
  },

  getLesson (nextState, replace) {
    const lessonArray = [];

    this.props.data.forEach((course) => {
      course.lessons.forEach((lesson) => {
        if (Number(lesson.id) === Number(nextState.params.id[1])) {
          lessonArray.push(lesson);
        }
      });
    });

    if (lessonArray.length < 1) {
      return replace('/');  // redirect to course list if no match is found
    }


    Object.assign(nextState.params, lessonArray[0]);
  },

  render () {
    const data = this.props.data;

    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ CourseList } data={ data } />
        <Route path='/courses' component={ CourseList } data={ data } />
        <Route path='/courses/:id' component={ Course } onEnter={ this.getCourse }/>
        <Route path='/courses/:id/lessons/:id' component={ Lesson } onEnter={ this.getLesson } />
        <Route path='/courses/:id/quiz' component={ Quiz } />
        <Route path='/courses/:id/certificate' component={ Certificate } />
        <Route path='/instructors/:id' component={ Instructor } onEnter={ this.getInstructor } />
      </Router>
    );
  }
});

module.exports = App;
