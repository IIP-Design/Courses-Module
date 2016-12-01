import React from 'react';
import { Link } from 'react-router';


const { array, number } = React.PropTypes;


const getLink = (lessons, lessonIndex, index, label) => {
  const goToIndex = lessonIndex + index;
  const slug = lessons[goToIndex].slug;

  return (
    <Link to={ `lesson/${slug}` } id={ slug }>{ label }</Link>
  );
};


const ButtonNav = (props) => {
  const numLessons = props.lessons.length - 1;
  const lessons = props.lessons;
  const lessonIndex = props.lessonIndex;

  if (lessonIndex === numLessons) {
    return (
      <div className='lesson-buttonnav'>
        { getLink(lessons, lessonIndex, -1, 'Previous Lesson') }
        <Link to={ 'quiz' }>Go to Quiz</Link>
      </div>
    );
  }

  if (lessonIndex === 0) {
    return (
      <div className='lesson-buttonnav'>
         { getLink(lessons, lessonIndex, 1, 'Next Lesson') }
      </div>
    );
  }

  if (lessonIndex !== 0 && lessonIndex !== numLessons) {
    return (
      <div className='lesson-buttonnav'>
        { getLink(lessons, lessonIndex, -1, 'Previous Lesson') }
        { getLink(lessons, lessonIndex, 1, 'Next Lesson') }
      </div>
    );
  }
};


ButtonNav.propTypes = {
  lessons: array,
  lessonIndex: number
};


export default ButtonNav;
