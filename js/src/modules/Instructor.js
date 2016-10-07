const React = require('react');

const Instructor = React.createClass({
  render: function() {
    return (
      <div className="media-object">
        <img src="http://placekitten.com/100/100" alt="" className="media-object-image" />
        <h5 className="media-object-title">Instructor Name</h5>
        <p className="media-object-description">Description</p>
      </div>
    );
  }
});

module.exports = Instructor;
