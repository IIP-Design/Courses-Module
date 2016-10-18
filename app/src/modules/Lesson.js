const React = require('react');
const { Link } = require('react-router');
const { object } = React.PropTypes;
const YouTube = require('react-youtube').default;
const { Tab, Tabs, TabList, TabPanel } = require('react-tabs');
const { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } = require('./components/Collapse.js');

const Lesson = React.createClass({
  propTypes: {
    lesson: object
  },


  getInitialState: function() {
    const data = require('../course-data');
    const lesson = this.getLesson(data);

    // The video id should be in the json
    return { data: lesson, video: 'gDgME_uIWtA' };
  },


  // Temporary method until start ajax requests
  getLesson: function(courses) {
    const props = this.props;
    const course = this.getThisCourse(courses);
    const lesson = course.lessons.filter(function(lesson) {
      return (Number(lesson.id) === Number(props.params.id[1]));
    });

    return lesson[0];
  },


  getThisCourse: function(courses) {
    const props = this.props;
    const course = courses.filter(function(course) {
      return (Number(course.id) === Number(props.params.id[0]));
    });

    return course[0];
  },


  rawDescription: function() {
    return {  __html: this.state.data.description };
  },


  rawTranscript: function() {
    return { __html: this.state.data.transcript };
  },


  // @todo YouTube component needs a responsive wrapper
  render: function() {
    const accordionClassNames = { content: 'accordion-content', panel: 'accordion-panel', title: 'accordion-title' };
    const tabsClassNames = { content: 'tabs-content', panel: 'tabs-panel', title: 'tabs-title' };

    const resources = this.state.data.resources.map(function(resource) {
      return (
        <li key={ resource.id }><a href={ resource.url } >{ resource.title }</a></li>
      );
    });

    const glossary = this.state.data.glossary.map(function(term) {
      return (
        <CollapseItem key={ term.id }>
          <CollapseTrigger tag={ 'p' }>{ term.title }</CollapseTrigger>
          <CollapsePanel>{ term.description }</CollapsePanel>
        </CollapseItem>
      );
    });

    // @todo: Use collapse for tabs and glossary
    return (
      <div>
        <h2>{ this.state.data.title }</h2>
        <YouTube videoId={ this.state.video } />
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Transcript</Tab>
            <Tab>Lesson Resources</Tab>
          </TabList>
          <TabPanel>
            <div dangerouslySetInnerHTML={ this.rawDescription() }></div>
          </TabPanel>
          <TabPanel>
            <div dangerouslySetInnerHTML={ this.rawTranscript() }></div>
          </TabPanel>
          <TabPanel>
            { resources }
          </TabPanel>
        </Tabs>
        <h3>Glossary of Terms</h3>
        <Collapse>
          { glossary }
        </Collapse>
        <Link to={`/courses/${this.props.params.id[0]}/quiz`}>Go to quiz</Link>
       </div>
    );
  }
});

module.exports = Lesson;
