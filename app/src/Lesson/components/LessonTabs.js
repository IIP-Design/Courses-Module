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

const LessonTabs = React.createClass({
  propTypes: {
    description: string.isRequired,
    transcript: string.isRequired,
    transcriptFile: string.isRequired,
    resource: array,
    audio: object,
    language: object
  },


  rawDescription() {
    return {  __html: this.props.description };
  },


  rawTranscript() {
    return { __html: this.props.transcript };
  },


  isEmpty(array) {
    return array.length === 0;
  },

  hasProp (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop].length > 0;
  },

  getResource(resource) {
     let href, fileinfo;

     if (this.hasProp (resource, 'url')) {
        href = resource.url; 
        fileinfo = '';
      } else {
       href = resource.src; 
       fileinfo = `[${resource.src_type}, ${resource.src_size}]`;
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
  },

  render() {
    let resources, href, fileinfo;
    const { language, audio, transcriptFile } = this.props;

    if (this.props.resources !== false) {
      resources = this.props.resources.map((resource) => {
        return this.getResource(resource);
      });
    }

    return (
      <Tabs>
        <TabList>
          <Tab>{ language.overview }</Tab>
          <Tab>{ language.transcript }</Tab>
          { this.props.resources === false ? null : <Tab>{ language.resources }</Tab> }
          { this.hasProp( audio, 'src') ?  <Tab>{ language.audio }</Tab> : null }
        </TabList>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              <a
                href={ transcriptFile }
                target="_blank"
                className="print">{ language.print }</a>
            </p>
            <div dangerouslySetInnerHTML={ this.rawTranscript() }></div>
          </div>
        </TabPanel>
        { this.props.resources === false ? null : <TabPanel><ul>{ resources }</ul></TabPanel> }
        { this.hasProp( audio, 'src') ?  <TabPanel><audio controls src={ audio.src } className="course-audio-player"></audio></TabPanel> : null }
      </Tabs>
    );
  }
});

export default LessonTabs;

