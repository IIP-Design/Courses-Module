const React = require('react');
const { Link } = require('react-router');

const Course = (props) => (
  <div>
    <h1>Course 1</h1>
    <Link to={`/courses/${props.params.id}/course-lesson`}>Go to lesson</Link>
  </div>
);

const { object } = React.PropTypes;

Course.propTypes = {
  params: object
};

module.exports = Course;
