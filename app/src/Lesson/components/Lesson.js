import React from 'react';
import YouTube from 'react-youtube';

import Breadcrumbs from '../../App/components/Breadcrumbs';
import Glossary from './Glossary';
import LessonTabs from './LessonTabs';
import ButtonNav from './ButtonNav';
import LessonPagination from './LessonPagination';

const { object, array, string } = React.PropTypes;


const Lesson = React.createClass({
  propTypes: {
    courseTitle: string,
    lessons: array,
    lesson: object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  render() {
    const props = this.props;
    const media = (props.lesson.media) ? props.lesson.media : {};
    const video = (props.lesson.media && props.lesson.media.video) ? props.lesson.media.video : {};

    return (
      <div className='lesson'>
        <div className="two-thirds first">
          <h1 className='lesson-title'>{ props.lesson.title }</h1>
          <Breadcrumbs courseTitle={ props.courseTitle } name={ props.lesson.title  }  />
          <div className='lesson-video'>
            <YouTube videoId={ video.video_id  } />
          </div>
          <div className='lesson-nav'>
            <ButtonNav lessons={ props.lessons } lessonIndex={ props.lessonIndex }/>
            <LessonPagination lessons={ props.lessons } lessonIndex={ props.lessonIndex } />
          </div>
          <LessonTabs description={ props.lesson.description } transcript={ media.transcript_text } resources={ props.lesson.resources }
          />
        </div>
        <div className="one-third">
          <Glossary terms={ props.lesson.glossary } />
        </div>
      </div>
    );
  }
});


export default Lesson;

