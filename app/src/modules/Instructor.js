const React = require('react');

const Instructor = React.createClass({
  propTypes: {
    instructor: React.PropTypes.object
  },

  // Temp function until ajax requests
  getInitialState: function() {
    const data = require('../courses');
    const instructor = this.getInstructor(data);

    return { data: instructor };
  },

  getInstructor: function(courses) {
    const props = this.props;
    var found;

    courses.forEach(function(course) {
      course.lessons.forEach(function(lesson) {
        lesson.instructors.forEach(function(instructor) {
          if (Number(instructor.id) === Number(props.params.id)) {
            found = instructor;
          }
        });
      });
    });

    return found;
  },

  render: function() {
    return (
      <h2>Instructor: { this.state.data.title }</h2>
    );
  }
});

module.exports = Instructor;
