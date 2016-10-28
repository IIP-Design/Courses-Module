const React = require('react');
const MediaObject = require('./components/MediaObject');
const Button = require('./components/Button');
const { sprintf } = require('sprintf-js');
const { array } = React.PropTypes;

const { dispatch } = require('../store');
const { setLesson } = require('../actions/actions');

require('../stylesheets/modules/LessonList.scss');

const LessonList = React.createClass({
  propTypes: {
    lessons: array
  },

  render: function() {
    const lessons = this.props.lessons.map((lesson) => {
      const link  = sprintf('%s', lesson.slug );

      // @todo: Get this programmatically
      const duration = '25min';

      return (
        <li className='lessons-list-item' key={ lesson.id }>
          <MediaObject  tag={ 'h4' } link={ `lesson/${link}` } { ...lesson } />
          <Button className='button-wrapper' value={ 'Take Lesson' } link={ `lesson/${link}` } id={ lesson.id }  />
        </li>
      );
    });

    return (
      <section className='lessons-list'>
        <header>
          <h3>Course Lessons</h3>
        </header>
        <ol className='lessons-list__ordered'>
          { lessons }
        </ol>
      </section>
    );
  }
});

module.exports = LessonList;
