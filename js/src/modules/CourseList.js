const React = require('react');
const MediaObject = require('./MediaObject');

const CourseList = React.createClass({
  getInitialState: function() {
    const data = require('../course-data');
    return { data: data };
  },

  render: function() {
    const courses = this.state.data.map(function(course) {
      return (
        <MediaObject key={ course.id } tag={ 'h4' } link={ '/courses/' + course.id } { ...course } />
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
