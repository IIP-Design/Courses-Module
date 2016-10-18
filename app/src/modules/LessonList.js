const React = require('react');
const MediaObject = require('./components/MediaObject');
const Button = require('./components/Button');
const Duration = require('./components/Duration');

const LessonList = React.createClass({
  propTypes: {
    course: React.PropTypes.object
  },

  render: function() {
    const courseId = this.props.courseId;
    const lessons = this.props.lessons.map(function(lesson) {
      const link  = '/courses/' + courseId + '/lessons/' + lesson.id;

      // Not sure how to get this programmatically yet
      const duration = '25min';

      return (
        <li key={ lesson.id }>
          <MediaObject tag={ 'h4' } link={ link } { ...lesson } />
          <Button value={ 'Take Lesson' } link={ link } />
          <Duration duration={ duration } />
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
