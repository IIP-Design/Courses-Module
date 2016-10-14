const React = require('react');
const { Link } = require('react-router');

const Button = React.createClass({
  render: function() {
    return (
      <div>
        <Link to={ this.props.link }><input type="button" value={ this.props.value } /></Link>
      </div>
    );
  }
});

module.exports = Button;
