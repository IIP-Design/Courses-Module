import React from 'react';
import api from '../api'
import MediaObject from './components/MediaObject';
import { Link } from 'react-router';
import { sprintf } from 'sprintf-js';
import { dispatch } from '../store';
import { getLesson } from '../actions/actions';

require('../Course/components/stylesheets/LessonList.scss');

const { array } = React.PropTypes;

const LessonList = React.createClass({
  propTypes: {
    lessons: array
  },

  handleClick(e) {
    api.getLesson(e.target.id);
  },

  render() {
    const lessons = this.props.lessons.map((lesson) => {
      const link  = sprintf('%s', lesson.slug );

      return (
        <li className='lessons-list-item' key={ lesson.id }>
          <MediaObject  tag={ 'h3' } link={ `lesson/${ link }` } { ...lesson } />
          <Link to={ `lesson/${ link }` } onClick={ this.handleClick } id={ link }>Take Lesson</Link>
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

