const React           = require('react');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const MediaObject     = require('./components/MediaObject');
const StepsList       = require('./components/StepsList');

const Course = React.createClass({
  propType: function() {
    params: React.PropTypes.object
  },


  // Temporary for loading data from a file
  getInitialState: function() {
    const data = require('../courses.js');
    const course = this.getCourse(data);

    return { data: course };
  },


  // Temporary for loading courseId from localStorage
  getCourse: function(courses) {
    const course = courses.filter(function(course) {
      return (Number(course.id) === Number(localStorage.getItem('courseId')));
    }, this);

    return course[0];
  },


  getInstructors: function() {
    const instructors = [];

    // Loop through the lessons, push instructor to instructors Array if not already there
    this.state.data.lessons.forEach(function(lesson) {
      lesson.instructors.forEach(function(instructor) {
        const found = JSON.stringify(instructors).indexOf(JSON.stringify(instructor)) > -1;
        if (!found) {
          instructors.push(instructor);
        }
      });
    });

    return instructors;
  },


  render: function() {
    const courseId = this.state.data.id;
    const lessons = this.state.data.lessons;

    return (
      <div>
        <section className='course-intro'>
          <MediaObject tag={ 'h4' } reversed={ true }  { ...this.state.data } />
        </section>
        <StepsList />
        <LessonList lessons={ lessons } />
        <InstructorList instructors={ this.getInstructors() } />
      </div>
    );
  }
});

module.exports = Course;
