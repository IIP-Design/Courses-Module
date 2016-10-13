const React = require('react');
const MediaObject = require('./MediaObject');

const LessonList = React.createClass({
  render: function() {
    const lessons = this.props.lessons.map(function(lesson) {
      return (
        <li key={ lesson.id }>
          <MediaObject tag={ 'h4' } src_url={ lesson.media.src_url } alt={ lesson.media.alt } width={ lesson.media.width } height={ lesson.media.height } title={ lesson.title } description={ lesson.excerpt } />
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
