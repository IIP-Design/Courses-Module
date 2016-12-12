import React from 'react';
import { connect } from 'react-redux';

import { setUserAnswer } from '../actions';
import RadioChoice from '../components/RadioChoice';


const { array, func, number, string } = React.PropTypes;


/*
 * The container component responsible for interacting with the Redux store.
 *
 * @since 2.0.0
 */

const RadioChoiceContainer = React.createClass({
  propTypes: {
    handleChange: func,
    userAnswers: array,
    choice: string,
    qid: number,
    htmlId: string
  },


  getAnswer(answers) {
    return answers.filter((answer) => answer.id === this.props.htmlId)[0];
  },


  render() {
    const props = this.props;
    const checked = this.getAnswer(props.userAnswers) || {};

    return (
      <RadioChoice checked={ (('id' in checked)) ? checked.id : '' } { ...props } />
    );
  }
});




/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.quiz - The quiz object in the Redux store
 *
 * @return {Object} RadioChoicContainerStatePropsObject - Data from state mapped to the RadioChoiceContainer's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ quiz }) => {
  const userAnswers = quiz.userAnswers;

  /*
   * @typedef {Object} RadioChoicContainerStatePropsObject
   * @property {Array} userAnswers - The user's answers
   */

  return {
    userAnswers
  };
};




/*
 * Standard Redux mapDispatchToProps function.
 *
 * @param {Function} dispatch - Redux dispatch function
 *
 * @return {Object} RadioChoiceContainerDispatchPropsObject - Object of callback functions mapped to the RadioChoiceContainer's props
 */

const mapDispatchToProps = (dispatch) => {

  /*
   * @typedef {Object} RadioChoiceContainerDispatchPropsObject
   * @property {Function} handleChange - A callback that updates a user's answer in state
   */

  return {
    handleChange: e => {
      dispatch(setUserAnswer(e.target.id));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RadioChoiceContainer);

