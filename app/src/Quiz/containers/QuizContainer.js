import React from 'react';
import { connect } from 'react-redux';

import Quiz from '../components/Quiz';


const { array, string } = React.PropTypes;


const QuizContainer = (props) => <Quiz { ...props }/>;


QuizContainer.propTypes = {
  courseName: string,
  lessons: array,
  questions: array
};


const mapStateToProps = ({ app }) => {
  const course = app.data;
  const lessons = app.data.lessons;
  const questions = [].concat.apply([], lessons.map(lesson => lesson.quiz));

  return {
    courseName: course.title,
    lessons,
    questions
  };
};


export default connect(mapStateToProps)(QuizContainer);

