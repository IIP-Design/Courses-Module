const React = require('react');

require('../stylesheets/modules/MainLayout.scss');

const MainLayout = React.createClass({
  render: function() {
    return (
      <div>
        <p>MainLayout</p>
        { this.props.children }
      </div>
    );
  }
});

module.exports = MainLayout;
