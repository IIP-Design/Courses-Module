import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import shortid from 'shortid';

require('./stylesheets/Media.scss');

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
    resource: array,
    audio: object
  },


  rawDescription() {
    return {  __html: this.props.description };
  },


  rawTranscript() {
    return { __html: this.props.transcript };
  },


  isEmpty(array) {
    return (array.length === 0) ? true : false;
  },

  hasProp (obj, prop) {
    if( Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop].length > 0 ) {
      return true;
    }
    return false;
  },

  render() {
    let resources;

    if (this.props.resources !== false) {
      resources = this.props.resources.map((resource) => {
        return (
          <li key={ shortid.generate() }><a href={ resource.src } target='_blank'>{ resource.title }</a></li>
        );
      });
    }

    return (
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Transcript</Tab>
          { this.props.resources === false ? null : <Tab>Lesson Resources</Tab> }
          { this.hasProp( this.props.audio, 'src') ?  <Tab>Audio</Tab> : null }
        </TabList>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={ this.rawTranscript() }></div>
        </TabPanel>
        { this.props.resources === false ? null : <TabPanel><ul>{ resources }</ul></TabPanel> }
        { this.hasProp( this.props.audio, 'src') ?  <TabPanel><audio controls src={ this.props.audio.src } className="course-audio-player"></audio></TabPanel> : null }
      </Tabs>
    );
  }
});

export default LessonTabs;

