import React from 'react';
import ChoiceList from '../components/ChoiceList';

const { string, number, bool, array } = React.PropTypes;


/*
 * The Question component.
 *
 * @since 1.0.0
 */

const Question = React.createClass({
  propTypes: {
    text: string,
    choices: array,
    questionId: string,
    correct: bool
  },


  rawHTML()  {
    return { __html: this.props.text };
  },


  render() {
    const { questionId, choices } = this.props;

    return (
      <li className='quiz-question'>
        <div
          id={ questionId }
          className='quiz-question-text'
          dangerouslySetInnerHTML={ this.rawHTML() }></div>
        <ChoiceList
          className='quiz-choices'
          questionId={ questionId }
          choices={ choices } />
      </li>
    );
  }
});


export default Question;

