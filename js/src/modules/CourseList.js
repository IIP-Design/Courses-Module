const React = require('react');
const Course = require('./Course');

const CourseList = React.createClass({
  render: function() {
    const courses = this.props.data.map(function(course) {
      return (
        <Course key={course.id} course={ course } />
      );
    });
    return (
      <div>
        { courses }
      </div>
    );
  }
});

module.exports = CourseList;
