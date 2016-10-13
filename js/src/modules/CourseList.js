const React = require('react');
const MediaObject = require('./MediaObject');

console.log('COURSE LIST')

const CourseList = React.createClass({
  render: function() {
    
    const data = this.props.route.data || {}

    const courses = data.map(function(course) {
      return (
        <MediaObject key={ course.id } tag={ 'h4' } src_url={ course.media.src_url } alt={ course.media.alt } width={ course.media.width } height={ course.media.height } title={ course.title } description={ course.excerpt } />
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
