const React = require('react');
const ChoiceList = require('./ChoiceList');

const { string, number, array } = React.PropTypes;

const Question = React.createClass({
	propTypes: {
    text: string,
    choices: array,
    qid: number
  },

  createMarkup()  { 
  	return { __html: this.props.text }; 
  },
 
  render() {
		return (
    	<li>
    		<div dangerouslySetInnerHTML={ this.createMarkup() }></div>
		  	<ChoiceList qid={ this.props.qid } choices={ this.props.choices } />
			</li>
		);
	}
});

module.exports = Question;
