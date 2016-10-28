const React = require('react');
const { connect } = require('react-redux');
const api = require('../api');
const YouTube = require('react-youtube').default;
const Breadcrumbs = require('./components/Breadcrumbs');
const Glossary = require('./components/Glossary');
const LessonTabs = require('./components/LessonTabs');
const Button = require('./components/Button');
const { Link } = require('react-router');
const findIndex = require('lodash');

const { array, object, string, number } = React.PropTypes;

// We wrap it in 'withRouter' so we can push updates to the url to the address bar
const Lesson = React.createClass({
  propTypes: {
    params: object,
    courseTitle: string,
    lesson: object,
    lessons: array,
    lessonIndex: number,
    media: object,
    image: object,
    resources: array,
    glossary: array
  },

  // Set the correct RouteNames for the React Router Breadcrumbs component before the module loads
  componentWillMount: function() {
    api.getLesson(this.props.params.lessonSlug);
  },

  // Set the correct RouteNames for the React Router Breadcrumbs component before the module updates
  componentWillUpdate: function() {
    api.getLesson(this.props.params.lessonSlug);  
  },
  
  // Assign the correct next/previous/both buttons
  buttonNav: function() {
    const numLessons = this.props.lessons.length - 1;
    const lessons = this.props.lessons;
    const lessonIndex = this.props.lessonIndex;

    if (lessonIndex === numLessons) {
      return (
        <div>
          <Link to={ `lesson/${lessons[lessonIndex - 1].slug}` }>Previous Lesson</Link>
          <Link to={ 'quiz' }>Go to quiz</Link>
        </div>
      );
    }

    if (lessonIndex === 0) {
      return (
        <div>
          <Link to={ `lesson/${lessons[lessonIndex + 1].slug}` }>Next Lesson</Link>
        </div>
      );
    }

    if (lessonIndex !== 0 && lessonIndex !== numLessons) {
      return (
        <div>
          <Link to={ `lesson/${lessons[lessonIndex - 1].slug}` }>Previous Lesson</Link>
          <Link to={ `lesson/${lessons[lessonIndex + 1].slug}` }>Next Lesson</Link>
        </div>
      );
    }
  },


  lessonPagination: function( lesson, index) {
    const cls = ( index === this.props.lessonIndex ) ? 'active' : '';
    return ( 
        <li className={cls} key={ index }>{ index + 1 }</li>
    );
  },


  // @todo YouTube component needs a responsive wrapper
  // @todo Pull buttonNav out into its own component
  // @todo Pull lessonPagination out into its own component
  render: function() {
    const props = this.props;

    return (
      <div>
        <h2>{ props.lesson.title }</h2>
        <Breadcrumbs courseTitle={ props.courseTitle} name={ props.lesson.title  }  />
        <YouTube videoId={ props.media.video.video_id } />
        { this.buttonNav() }
        <ul className='lesson-pagination'>
          { this.props.lessons.map(this.lessonPagination) }
        </ul>
        <LessonTabs
          description={ props.lesson.description }
          transcript={ props.media.transcript_text }
          resources={ props.resources }
        />
        <Glossary terms={ props.glossary } />  
      </div>
    );
  }
});

const mapStateToProps = (store) => {
  const lesson = store.lesson;
  const course = store.course;
  const index = _.findIndex(course.lessons, (o) => { 
    return o.id == lesson.detail.id; 
  });
  
  return {
    courseTitle: course.detail.title,
    lessons: course.lessons,
    lesson: lesson.detail,
    lessonIndex: index,
    media: lesson.media,
    image: lesson.image,
    resources: lesson.resources,
    glossary: lesson.glossary
  };
}; 

module.exports = connect(mapStateToProps)(Lesson);
