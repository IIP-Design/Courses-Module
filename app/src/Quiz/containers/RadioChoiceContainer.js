import React from 'react';
import { connect } from 'react-redux';

import { setUserAnswer } from '../actions';
import RadioChoice from '../components/RadioChoice';


const { array, func, number, string } = React.PropTypes;


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


const mapStateToProps = ({ quiz }) => {
  const userAnswers = quiz.userAnswers;

  return {
    userAnswers
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: e => {
      dispatch(setUserAnswer(e.target.id));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RadioChoiceContainer);

