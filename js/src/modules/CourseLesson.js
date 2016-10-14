const React = require('react');
const { Link } = require('react-router');
const { object } = React.PropTypes;

const CourseLesson = React.createClass({
  propTypes: {
    lesson: object
  },

  getInitialState: function() {
    const data = require('../course-data');
    const lesson = this.getLesson(data);

    return { data: lesson };
  },

  // Temporary method until start ajax requests
  getLesson: function(courses) {
    const props = this.props;
    var found;

    courses.forEach(function(course) {
      course.lessons.forEach(function(lesson) {
        if (Number(lesson.id) === Number(props.params.id[1])) {
          found = lesson;
        }
      });
    });

    return found;
  },

  render: function() {
    return (
      <div>
        <h1>{ this.state.data.title }</h1>
         <Link to={`/courses/${this.props.params.id}/course-quiz`}>Go to quiz</Link>
       </div>
    );
  }
});

module.exports = CourseLesson;
