import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Question from 'Quiz/components/Question';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { array } = PropTypes;


/**
 * The QuestionList component.
 *
 * @todo Do we want to pass the choices, questionId all the way down from this component?
 *
 * @since 1.0.0
 */

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
  }


  shouldComponentUpdate(nextProps) {
    return false;
  }


  /**
   * Note: Sending questionId as Question cannot
   * access key. We need the questionId to construct
   * common group name for each choice
   */
  renderQuestion(question) {
    const { choices, id, text } = question;

    return (
      <Question
        key={ shortid.generate() }
        questionId={ id }
        text={ text }
        choices={ choices } />
    );
  }


	render() {
    const { questions } = this.props;
    const questionsList = questions.map(this.renderQuestion);

    return (
      <ol id='questionList' className={ `${ styles.questions } quiz-questions` }>
        { questionsList }
      </ol>
    );
  }
}


QuestionList.propTypes = {
  questions: array
};


export default QuestionList;
