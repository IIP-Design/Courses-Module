const React           = require('react');
const StepsList       = require('./StepsList');
const LessonList      = require('./LessonList');
const InstructorList  = require('./InstructorList');
const MediaObject     = require('./MediaObject');

const Course = React.createClass({
  getInstructors: function() {
    const instructors = [];

    this.props.course.lessons.forEach(function(lesson) {
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
    return (
      <div>
        <section className="course-intro">
          // Description vs Excerpt and how to handle custom styles, like for instance the image floated right, instead of left?
          <MediaObject tag={ 'h4' } src_url={ this.props.course.media.src_url } alt={ this.props.course.media.alt } width={ this.props.course.media.width } height={ this.props.course.media.height } title={ this.props.course.title } description={ this.props.course.excerpt }  />
        </section>
        <StepsList />
        <LessonList lessons={ this.props.course.lessons } />
        <InstructorList instructors={ this.getInstructors() } />
      </div>
    );
  }
});

module.exports = Course;
