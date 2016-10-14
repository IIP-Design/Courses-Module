const React = require('react');

const Step = React.createClass({
  render: function() {
    return (
      <li className={ this.props.className }><span className="course-step-title">{ this.props.title }</span><span className="course-step-description">{ this.props.children }</span></li>
    );
  }
});

module.exports = Step;
