import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import { Breadcrumbs } from 'App';
import Glossary from 'Lesson/components/Glossary';
import LessonTabs from 'Lesson/components/LessonTabs';
import ButtonNav from 'Lesson/components/ButtonNav';
import LessonPagination from 'Lesson/components/LessonPagination';

import styles from 'Lesson/components/stylesheets/LessonLayout.scss';

const { object, array, string } = PropTypes;


/*
 * The Lesson component.
 *
 * @since 1.0.0
 */

class Lesson extends React.Component {
  componentDidMount() {
    // Scroll to the top of the window to prevent the page from "loading" in the middle
    window.scroll(0, 0);
  }


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

    const isLangEnglish = (language.locale === 'en') ? 0 : 1;

    media = media || {};
    const video = (media && media.video) ? media.video : {};
    const audio = (media && media.audio) ? media.audio : {};
    // let turnCaptionOn = isLangEnglish;
    const mediaOpts = {
      playerVars: {
        hl: language.locale,
        cc_load_policy: isLangEnglish
      }
    };

    return (
      <div className='lesson'>
        <div className='two-thirds first'>
          <h1 className={ `${ styles.title } lesson-title` }>{ title }</h1>
          <Breadcrumbs courseTitle={ courseTitle } name={ title } />
          <div className={ `${ styles.video } lesson-video` }>
            <YouTube videoId={ video.video_id } opts={ mediaOpts } />
          </div>
          <nav className={ `${ styles.nav } lesson-nav` }>
            <ButtonNav
              lessons={ lessons }
              lessonIndex={ lessonIndex }
              language={ language } />
            <LessonPagination
              lessons={ lessons }
              lessonIndex={ lessonIndex } />
          </nav>
          <LessonTabs
            description={ description }
            transcript={ media.transcript_text }
            transcriptFile={ media.transcript_file_url }
            resources={ resources }
            audio={ audio }
            language={ language }
          />
        </div>
        <div className='one-third'>
          <Glossary terms={ glossary } language={ language } />
        </div>
      </div>
    );
  }
}


Lesson.propTypes = {
  courseTitle: string,
  lessons: array,
  lesson: object,
  language: object
};


export default Lesson;
