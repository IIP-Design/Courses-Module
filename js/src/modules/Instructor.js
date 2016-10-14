const React = require('react');

const Instructor = React.createClass({
  propTypes: {
    instructor: React.PropTypes.object
  },

  render: function() {
    const instructor = this.props.params || {};

    return (
      <h2>Instructor: { instructor.title }</h2>
    );
  }
});

module.exports = Instructor;
