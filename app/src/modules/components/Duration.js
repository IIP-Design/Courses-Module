const React = require('react');

const Duration = React.createClass({
  render: function() {
    return (
      <div>
        Duration: { this.props.duration }
      </div>
    );
  }
});

module.exports = Duration;
