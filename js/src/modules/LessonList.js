const React = require('react');
const MediaObject = require('./MediaObject');

const LessonList = React.createClass({
  propTypes: {
    course: React.PropTypes.object
  },

  render: function() {
    const courseId = this.props.courseId;
    const lessons = this.props.lessons.map(function(lesson) {
      return (
        <li key={ lesson.id }>
          <MediaObject tag={ 'h4' } link={ '/courses/' + courseId + '/lessons/' + lesson.id } { ...lesson } />
        </li>
      );
    });

    return (
      <section className="lessons-list__ordered">
        <header>
          <h3>Course Lessons</h3>
        </header>
        <ol>
          { lessons }
        </ol>
      </section>
    );
  }
});

module.exports = LessonList;
