const React = require('react');
const { Link } = require('react-router');
const { object } = React.PropTypes;
const YouTube = require('react-youtube').default;
const { Tab, Tabs, TabList, TabPanel } = require('react-tabs');
const { Collapse, CollapseItem, CollapsePanel, CollapseTrigger } = require('./components/Collapse.js');
const Breadcrumbs = require('react-breadcrumbs');

const Lesson = React.createClass({
  propTypes: {
    lesson: object
  },


  getInitialState: function() {
    const data = require('../course');
    const lesson = this.getLesson(data);

    // Shallow clone the routes from props to mutate
    return {
      data: lesson,
      routes: JSON.parse(JSON.stringify(this.props.routes))
    };
  },


  // Set the routes' names when the component mounts
  componentDidMount: function() {
    this.setState({ route: this.setRoutesNames() })
  },


  // Temporary method until start ajax requests
  getLesson: function(courses) {
    const course = this.getThisCourse(courses);
    const lesson = course.lessons.filter(function(lesson) {
      return (Number(lesson.id) === Number(this.props.params.lessonId));
    }, this);

    // Give the lesson some context about the parent course
    lesson[0].parent = {
      id: course.id,
      title: course.title,
      lessons: course.lessons.map(function(lesson) { return lesson.id })
    }

    return lesson[0];
  },


  getThisCourse: function(courses) {
    const course = courses.filter(function(course) {
      return (Number(course.id) === Number(this.props.params.courseId));
    }, this);

    return course[0];
  },


  // Get the course and lesson names for the breadcrumbs and set it in state
  // since we're discouraged from mutating props
  setRoutesNames: function() {
    this.state.routes.forEach(function(route) {
      if (route.path === ':courseId') {
        route.name = this.state.data.parent.title;
      }

      if (route.path === 'lessons/:lessonId') {
        route.name = this.state.data.title;
      }
    }, this);
  },


  rawDescription: function() {
    return {  __html: this.state.data.description };
  },


  rawTranscript: function() {
    return { __html: this.state.data.transcript };
  },


  // @todo YouTube component needs a responsive wrapper
  render: function() {
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
    // @todo: Conditionally load components depending on data presence
    return (
      <div>
        <h2>{ this.state.data.title }</h2>
        <Breadcrumbs routes={ this.state.routes } params={ this.props.params } />
        <YouTube videoId={ this.state.data.media.video.video_id } />
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
        <Link to={ `/courses/${ this.props.params.courseId }/quiz` }>Go to quiz</Link>
       </div>
    );
  }
});

module.exports = Lesson;