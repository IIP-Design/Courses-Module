const React = require('react');
const { Link } = require('react-router');

const CourseMenu = (props) => (
  <div>
    <h1>Course Menu</h1>
    <Link to='/courses/1/'>Course 1</Link>
  </div>
);


module.exports = CourseMenu;
