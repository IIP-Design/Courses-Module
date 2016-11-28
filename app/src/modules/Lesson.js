import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import api from '../api';
import Breadcrumbs from './components/Breadcrumbs';
import Glossary from './components/Glossary';
import LessonTabs from './components/LessonTabs';
import { Link } from 'react-router';
import { findIndex } from 'lodash';

const { array, object, string, number } = React.PropTypes;


const Lesson = React.createClass({
  propTypes: {
    params: object,
    courseTitle: string,
    lesson: object,
    lessons: array,
    lessonIndex: number,
    media: object,
    image: object,
    resources: array,
    glossary: array
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  // Fetch lesson based on component id
  handleClick(e) {
    api.getLesson(e.target.id);
  },

  // Fetch lesson nav link
  getLink(index, label) {
    const lessons = this.props.lessons;
    const lessonIndex = this.props.lessonIndex;
    const goToIndex = lessonIndex + index;
    const slug = lessons[goToIndex].slug;

    return (
      <Link to={ `lesson/${slug}` } id={ slug } onClick={ this.handleClick }>{ label }</Link>
    );
  },


  // Assign the correct next/previous/both buttons
  buttonNav() {
    const numLessons = this.props.lessons.length - 1;
    const lessons = this.props.lessons;
    const lessonIndex = this.props.lessonIndex;

    if (lessonIndex === numLessons) {
      return (
        <div className='lesson-buttonnav'>
          { this.getLink(-1, 'Previous Lesson') }
         	<Link to={ 'quiz' }>Go to Quiz</Link>
        </div>
      );
    }

    if (lessonIndex === 0) {
      return (
        <div className='lesson-buttonnav'>
           { this.getLink(1, 'Next Lesson') }
        </div>
      );
    }

    if (lessonIndex !== 0 && lessonIndex !== numLessons) {
      return (
        <div className='lesson-buttonnav'>
          { this.getLink(-1, 'Previous Lesson') }
          { this.getLink(1, 'Next Lesson') }
        </div>
      );
    }
  },


  lessonPagination(lesson, index) {
    const cls = ( index === this.props.lessonIndex ) ? 'active' : '';
    const slug = lesson.slug;
    const label = index + 1;

    return (
      <li className={cls} key={ index }>
        <Link to={ `lesson/${ slug }` } id={ slug } onClick={ this.handleClick }>{ label }</Link>
      </li>
    );
  },


  render() {
    const props = this.props;

    return (
      <div className='lesson'>
        <div className="two-thirds first">
          <h1 className='lesson-title'>{ props.lesson.title }</h1>
          <Breadcrumbs courseTitle={ props.courseTitle } name={ props.lesson.title  }  />
          <div className='lesson-video'>
            <YouTube videoId={ props.video.video_id  } />
          </div>
          <div className='lesson-nav'>
            { this.buttonNav() }
            <ul className='lesson-pagination'>
              { this.props.lessons.map(this.lessonPagination) }
            </ul>
          </div>
          <LessonTabs
            description={ props.lesson.description }
            transcript={ props.media.transcript_text }
            resources={ props.resources }
          />
        </div>
        <div className="one-third">
          <Glossary terms={ props.glossary } />
        </div>
      </div>
    );
  }
});


const mapStateToProps = (store) => {
  const lesson = store.lesson;
  const course = store.course;
  const index = _.findIndex(course.lessons, (o) => {
    return o.id == lesson.detail.id;
  });

  const media = (lesson.media) ? lesson.media : {};
  const video = (lesson.media && lesson.media.video) ? lesson.media.video : {};

  return {
    courseTitle: course.detail.title,
    lessons: course.lessons,
    lesson: lesson.detail,
    lessonIndex: index,
    media: media,
    video:video,
    image: lesson.image,
    resources: lesson.resources || [],  // resources coming in as boolean instead of empty array - this is temp
    glossary: lesson.glossary
  };
};


module.exports = connect(mapStateToProps)(Lesson);
