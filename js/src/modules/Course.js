const React           = require('react');
const StepsList       = require('./StepsList');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const MediaObject     = require('./MediaObject');

const Course = React.createClass({
  getInstructors: function() {
    const instructors = [];
    const course = this.props.params || {}

    course.lessons.forEach(function(lesson) {
      lesson.instructors.forEach(function(instructor) {
        const found = JSON.stringify(instructors).indexOf(JSON.stringify(instructor)) > -1;
        if (found === false) {
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
        <section className="course-intro">
          // Description vs Excerpt and how to handle custom styles, like for instance the image floated right, instead of left?
          <MediaObject tag={ 'h4' } src_url={ course.media.src_url } alt={ course.media.alt } width={ course.media.width } height={ course.media.height } title={ course.title } description={ course.excerpt }  />
        </section>
        <StepsList />
        <LessonList lessons={ course.lessons } />
        <InstructorList instructors={ this.getInstructors() } />
      </div>
    );
  }
});

module.exports = Course;
