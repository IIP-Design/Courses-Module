const React           = require('react');
const StepsList       = require('./StepsList');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const MediaObject     = require('./MediaObject');

const Course = React.createClass({
  propTypes: {
    course: React.PropTypes.object
  },

  getInstructors: function() {
    const instructors = [];
    const course = this.props.params || {}

    course.lessons.forEach(function(lesson) {
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
    const course = this.props.params || {}

    return (
      <div>
        <section className='course-intro'>
          <MediaObject tag={ 'h4' } reversed={ true }  { ...course } />
        </section>
        <StepsList />
        <LessonList course={ course } />
        <InstructorList instructors={ this.getInstructors() } />
      </div>
    );
  }
});

module.exports = Course;
