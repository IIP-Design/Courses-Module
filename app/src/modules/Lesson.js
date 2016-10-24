const React = require('react');
const YouTube = require('react-youtube').default;
const Breadcrumbs = require('react-breadcrumbs');
const Glossary = require('./components/Glossary');
const LessonTabs = require('./components/LessonTabs');
const Button = require('./components/Button');
const { Link } = require('react-router');
const { object } = React.PropTypes;

const Lesson = React.createClass({
  // @todo: Add propTypes

  getInitialState: function() {
    const data = require('../courses.js');
    const lesson = this.getLesson(data);

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
      return (lesson.slug === this.props.params.lessonSlug);
    }, this);

    // Give the lesson some context about the parent course
    lesson[0].parent = {
      id: course.id,
      slug: course.slug,
      title: course.title,
      lessons: course.lessons.map(function(lesson) { return lesson.id })
    }

    return lesson[0];
  },


  // Temporarily get courseId from localStorage
  getThisCourse: function(courses) {
    const courseId = localStorage.getItem('courseId');
    const course = courses.filter(function(course) {
      return (Number(course.id) === Number(courseId));
    }, this);

    return course[0];
  },


  // Get the course and lesson names for the breadcrumbs and set it in state
  setRoutesNames: function() {
    this.state.routes.forEach(function(route) {
      if (route.path === ':courseId') {
        route.name = this.state.data.parent.title;
      }

      if (route.path === ':lessonSlug') {
        route.name = this.state.data.title;
      }
    }, this);
  },


  getLessonPosition: function() {
    const id = this.state.data.id;
    const lessons = this.state.data.parent.lessons;
    const index = lessons.indexOf(id);
    const length = lessons.length;

    if (index === (lessons.length-1)) {
      return {
        position: 'last',
        index: index,
        length: length
      }
    }

    if (index === 0) {
      return {
        position: 'first',
        index: index,
        length: length
      }
    }

    return { index: index, length: length };
  },


  goTo: function(prevNext) {
    const lesson = this.getLessonPosition();
    const link = '/courses/' + this.state.data.parent.id + '/lessons/';

    if (prevNext === 'next') {
      return link + (this.state.data.parent.lessons[lesson.index+1]);
    }

    if (prevNext === 'previous') {
      return link + (this.state.data.parent.lessons[lesson.index-1]);
    }

    return TypeError('Invalid parameter. Should be either "next or "previous".');
  },


  buttonNav: function() {
    const lesson = this.getLessonPosition();

    if (lesson.position === 'last') {
      return (
        <Button value={ 'Previous Lesson' } link={ this.goTo('previous') }/>
      );
    }

    if (lesson.position === 'first') {
      return (
        <Button value={ 'Next Lesson' } link={ this.goTo('next') } />
      );
    }

    if (lesson.position !== 'first' && lesson.position !== 'last') {
      return (
        <div>
          <Button value={ 'Next Lesson' } link={ this.goTo('next') } />
          <Button value={ 'Previous Lesson' } link={ this.goTo('previous') } />
        </div>
      );
    }
  },


  // @todo YouTube component needs a responsive wrapper
  render: function() {
    return (
      <div>
        <h2>{ this.state.data.title }</h2>
        <Breadcrumbs routes={ this.state.routes } params={ this.props.params } />
        <YouTube videoId={ this.state.data.media.video.video_id } />
        { this.buttonNav() }
        <LessonTabs
          description={ this.state.data.description }
          transcript={ this.state.data.media.transcript_text }
          resources={ this.state.data.resources }/>
        <Glossary data={ this.state.data.glossary } />
        <Link to={ `/courses/${ this.props.params.courseId }/quiz` }>Go to quiz</Link>
       </div>
    );
  }
});

module.exports = Lesson;
