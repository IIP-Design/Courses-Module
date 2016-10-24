const React = require('react');
const YouTube = require('react-youtube').default;
const Breadcrumbs = require('react-breadcrumbs');
const Glossary = require('./components/Glossary');
const LessonTabs = require('./components/LessonTabs');
const Button = require('./components/Button');
const { Link, withRouter } = require('react-router');

// We wrap it in 'withRouter' so we can push updates to the url to the address bar
const Lesson = withRouter(React.createClass({
  // @todo: Add propTypes

  courses: require('../courses.js'),

  getInitialState: function() {
    return {
      data: this.getLesson(this.props.params.lessonSlug),
      routes: JSON.parse(JSON.stringify(this.props.routes))
    };
  },


  // Set the correct RoutNames for the React Router Breadcrumbs component before the module loads
  componentWillMount: function() {
    this.setRoutesNames();
  },


  // Set the correct RoutNames for the React Router Breadcrumbs component before the module updates
  componentWillUpdate: function() {
    this.setRoutesNames();
  },


  // Temporary method until start ajax requests
  getLesson: function(lessonSlug) {
    const course = this.getThisCourse();
    const lesson = course.lessons.filter(function(lesson) {
      return (lesson.slug === lessonSlug);
    }, this);

    // Give the lesson some context about the parent course
    lesson[0].parent = {
      id: course.id,
      slug: course.slug,
      title: course.title,
      lessons: course.lessons
    }

    return lesson[0];
  },


  // Temporarily get courseId from localStorage
  getThisCourse: function() {
    const courseId = localStorage.getItem('courseId');
    const course = this.courses.filter(function(course) {
      return (Number(course.id) === Number(courseId));
    }, this);

    return course[0];
  },


  // Get the course and lesson names for the breadcrumbs and set it in state
  setRoutesNames: function() {
    this.state.routes.forEach(function(route) {
      if (route.path === '/') {
        route.name = this.state.data.parent.title;
      }

      if (route.path === ':lessonSlug') {
        route.name = this.state.data.title;
      }
    }, this);
  },


  // Get some useful positional information about the lesson
  getLessonPosition: function() {
    const id = this.state.data.id;
    const lessons = this.state.data.parent.lessons;
    const length = lessons.length;
    let index = undefined;

    lessons.forEach(function(lesson) {
      if (lesson.id === id) {
        index = lessons.indexOf(lesson)
      }
    });

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


  // Get the slug for the next lesson
  next: function() {
    const lessonPosition = this.getLessonPosition();
    const lesson = this.state.data.parent.lessons[lessonPosition.index+1];

    return (
      <a className='button' onClick={ () => this.handleClick(lesson.slug) }>Next Lesson</a>
    );
  },


  // Get the slug for the previous lesson
  previous: function() {
    const lessonPosition = this.getLessonPosition();
    const lesson = this.state.data.parent.lessons[lessonPosition.index-1];

    return (
      <a className='button' onClick={ () => this.handleClick(lesson.slug) }>Previous Lesson</a>
    );
  },


  // Assign the correct next/previous/both buttons
  buttonNav: function() {
    const lesson = this.getLessonPosition();

    if (lesson.position === 'last') {
      return this.previous();
    }

    if (lesson.position === 'first') {
      return this.next();
    }

    if (lesson.position !== 'first' && lesson.position !== 'last') {
      return (
        this.previous(),
        this.next()
      );
    }
  },


  // Handle the click event on the button to update state
  handleClick: function(slug) {
    const lesson = this.getLesson(slug);
    this.setState({
      data: lesson
    });
    this.props.router.push(slug);
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
        <Link to={ 'quiz' }>Go to quiz</Link>
       </div>
    );
  }
}));

module.exports = Lesson;
