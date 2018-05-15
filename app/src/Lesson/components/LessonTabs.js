import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import shortid from 'shortid';

import mediaStyles from 'Lesson/components/stylesheets/Media.scss';
import tabStyles from 'Lesson/components/stylesheets/LessonTabs.scss';

const { string, array, object } = PropTypes;


/**
 * Render raw description
 *
 * @param {Object} props - React props object
 *
 * @since tba
 */

const rawDescription = props => ({ __html: props.description });


/**
 * Render raw transcript
 *
 * @param {Object} props - React props object
 *
 * @since tba
 */

const rawTranscript = props => ({ __html: props.transcript });


/**
 * Test if a resource object has a specific prop
 *
 * @param {Object} props - React props object
 * @param {Object} obj - the resource object
 * @return {Boolean} boolean - true if obj has prop, otherwise false
 *
 * @since tba
 */

const hasProp = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop].length > 0;
};


/**
 * Render an individual resource
 *
 * @param {Object} resource - individual resource
 *
 * @since tba
 */

const renderResource = (resource) => {
  const {
    url,
    src,
    src_type,
    src_size
  } = resource;

  let href, fileinfo;
  if (hasProp( resource, 'url' )) {
    href = url; 
    fileinfo = '';
  } else {
    href = src; 
    fileinfo = `[${ src_type }, ${ src_size.toUpperCase() }]`;
  }

  return (
    <li key={ shortid.generate() }>
      <a
        className='resource-link'
        href={ href }
        target='_blank'>{ resource.title }</a>
      <span className={ `${ tabStyles.fileInfo } resource-fileinfo` }> { fileinfo }</span>
    </li>
  );
};


/**
 * The LessonTabs component.
 *
 * @since 1.0.0
 */

const LessonTabs = (props) => {
  const {
    language,
    resources,
    audio,
    transcriptFile
  } = props;

  const {
    overview,
    transcript,
    print
  } = language;

  let resourcesList;
  if (resources) {
    resourcesList = resources.map(resource => renderResource(resource));
  }

  return (
    <Tabs>
      <TabList>
        <Tab>{ overview }</Tab>
        <Tab>{ transcript }</Tab>
        { resources && <Tab>{ language.resources }</Tab> }
        { hasProp(audio, 'src') && <Tab>{ language.audio }</Tab> }
      </TabList>

      <TabPanel>
        <div dangerouslySetInnerHTML={ rawDescription(props) } />
      </TabPanel>

      <TabPanel>
        <Fragment>
          <p>
            <a
              href={ transcriptFile }
              target='_blank'
              className={ `${ tabStyles.print } print` }>{ print }</a>
          </p>
          <div dangerouslySetInnerHTML={ rawTranscript( props ) } />
        </Fragment>
      </TabPanel>

      { resources &&
        <TabPanel>
          <ul>{ resourcesList }</ul>
        </TabPanel> }

      { hasProp(audio, 'src') &&
        <TabPanel>
          <audio
            controls
            src={ audio.src } 
            className={ `${ mediaStyles.audioPlayer } course-audio-player` } />
        </TabPanel> }
    </Tabs>
  );
};


LessonTabs.propTypes = {
  description: string.isRequired,
  transcript: string.isRequired,
  transcriptFile: string.isRequired,
  resource: array,
  audio: object,
  language: object
};


export default LessonTabs;
