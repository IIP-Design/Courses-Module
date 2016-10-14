const React           = require('react');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const MediaObject     = require('./components/MediaObject');
const StepsList       = require('./components/StepsList');

const Course = React.createClass({
  propType: function() {
    params: React.PropTypes.object
  },

  getInitialState: function() {
    const data = require('../course-data');
    const course = this.getCourse(data);

    return { data: course };
  },

  // Temporary method until start ajax requests
  getCourse: function(courses) {
    const props = this.props;
    var found;

    courses.forEach(function(course) {
      if (Number(course.id) === Number(props.params.id)) {
        found = course;
      }
    });

    return found;
  },

  getInstructors: function() {
    const instructors = [];

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
        <LessonList lessons={ lessons }  courseId={ courseId } />
        <InstructorList instructors={ this.getInstructors() } />
      </div>
    );
  }
});

module.exports = Course;
