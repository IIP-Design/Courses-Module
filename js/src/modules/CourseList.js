const React = require('react');
const MediaObject = require('./MediaObject');

const CourseList = React.createClass({
  render: function() {
    const data = this.props.route.data || {};
    const courses = data.map(function(course) {
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
