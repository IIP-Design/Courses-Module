import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import shortid from 'shortid';

require('./stylesheets/Media.scss');
require('./stylesheets/LessonTabs.scss');

const { string, array, object } = React.PropTypes;


/*
 * The LessonTabs component.
 *
 * @since 1.0.0
 */

const LessonTabs = props => {
  const rawDescription = props => {
    return {  __html: props.description };
  }

  const rawTranscript = props => {
    return { __html: props.transcript };
  }

  const isEmpty = array => {
    return array.length === 0;
  }

  const hasProp = (obj, prop) => {
    return Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop].length > 0;
  }

  const renderResource = resource => {
    const { url,
            src,
            src_type,
            src_size } = resource;

    let href, fileinfo;
    if (hasProp( resource, 'url' )) {
      href = url; 
      fileinfo = '';
    } else {
      href = src; 
      fileinfo = `[${src_type}, ${src_size}]`;
    }

    return (
      <li key={ shortid.generate() }>
        <a
          className='resource-link'
          href={ href }
          target='_blank'>{ resource.title }</a>
        <span className='resource-fileinfo'> { fileinfo }</span>
      </li>
    )
  }

  const { language,
          resources,
          audio,
          transcriptFile } = props;

  const { overview,
          transcript,
          print } = language;

  let resourcesList;
  if (resources !== false) {
    resourcesList = resources.map(renderResource);
  }

  return (
    <Tabs>
      <TabList>
        <Tab>{ overview }</Tab>
        <Tab>{ transcript }</Tab>

        { resources === false
          ? null
          : <Tab>{ language.resources }</Tab> }

        { hasProp( audio, 'src')
          ? <Tab>{ language.audio }</Tab>
          : null }

      </TabList>

      <TabPanel>
        <div dangerouslySetInnerHTML={ rawDescription( props ) }></div>
      </TabPanel>

      <TabPanel>
        <div>
          <p>
            <a
              href={ transcriptFile }
              target="_blank"
              className="print">{ print }</a>
          </p>
          <div dangerouslySetInnerHTML={ rawTranscript( props ) }></div>
        </div>
      </TabPanel>

      { resources === false
        ? null
        : <TabPanel>
            <ul>{ resourcesList }</ul>
          </TabPanel> }

      { hasProp( audio, 'src')
        ? <TabPanel>
            <audio
              controls
              src={ audio.src } 
              className="course-audio-player"></audio>
          </TabPanel>
        : null }
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
