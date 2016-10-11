const React = require('react');

require('./App.scss');
const data = require('../../../course.json');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
});

module.exports = App;
