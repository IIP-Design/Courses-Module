const React = require('react');
const { Link } = require('react-router');
const { object } = React.PropTypes;

const Lesson = React.createClass({
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
        <h2>{ this.state.data.title }</h2>
         <Link to={`/courses/${this.props.params.id[0]}/quiz`}>Go to quiz</Link>
       </div>
    );
  }
});

module.exports = Lesson;
