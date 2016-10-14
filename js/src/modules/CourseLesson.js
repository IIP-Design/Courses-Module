const React = require('react');
const { Link } = require('react-router');
const { object } = React.PropTypes;

const CourseLesson = React.createClass({
  propTypes: {
    lesson: object
  },

  render: function() {
    const lesson = this.props.params || {};

    return (
      <div>
        <h1>{ lesson.title }</h1>
         <Link to={`/courses/${this.props.params.id}/course-quiz`}>Go to quiz</Link>
       </div>
    );
  }
});

module.exports = CourseLesson;
