import React from 'react';
import YouTube from 'react-youtube';
import Breadcrumbs from 'App/components/Breadcrumbs';

import Glossary from './Glossary';
import LessonTabs from './LessonTabs';
import ButtonNav from './ButtonNav';
import LessonPagination from './LessonPagination';

const { object, array, string } = React.PropTypes;


/*
 * The Lesson component.
 *
 * @since 1.0.0
 */

const Lesson = React.createClass({
  propTypes: {
    courseTitle: string,
    lessons: array,
    lesson: object,
    language: object
  },


  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0,0);
  },


  render() {
    const { lesson,
            lessons,
            language,
            lessonIndex,
            courseTitle } = this.props;

    let { media,
          title,
          description,
          resources,
          glossary } = lesson;

    const isLangEnglish = ( language.locale === 'en' ) ? 0 : 1;
    
    media = media || {};
    const video = (media && media.video) ? media.video : {};
    const audio = (media && media.audio) ? media.audio : {};
    let turnCaptionOn = isLangEnglish;
    const mediaOpts = {
      playerVars: {
        hl: language.locale,
        cc_load_policy: isLangEnglish
      }
    };

    return (
      <div className='lesson'>
        <div className="two-thirds first">
          <h1 className='lesson-title'>{ title }</h1>
          <Breadcrumbs courseTitle={ courseTitle } name={ title  }  />
          <div className='lesson-video'>
            <YouTube videoId={ video.video_id  } opts={ mediaOpts } />
          </div>
          <div className='lesson-nav'>
            <ButtonNav
              lessons={ lessons }
              lessonIndex={ lessonIndex }
              language={ language } />
            <LessonPagination lessons={ lessons } lessonIndex={ lessonIndex } />
          </div>
          <LessonTabs
            description={ description }
            transcript={ media.transcript_text }
            transcriptFile={ media.transcript_file_url }
            resources={ resources }
            audio={ audio }
            language={ language }
          />
        </div>
        <div className="one-third">
          <Glossary terms={ glossary } language={ language } />
        </div>
      </div>
    );
  }
});


export default Lesson;
