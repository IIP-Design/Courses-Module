const React = require('react');
const { Link } = require('react-router');
const { object } = React.PropTypes;

const CourseLesson = (props) => (
  <div>
    <h1>Course Lesson 1</h1>
     <Link to={`/courses/${props.params.id}/course-quiz`}>Go to quiz</Link>
  </div>
);

CourseLesson.propTypes = {
  params: object
};

module.exports = CourseLesson;
