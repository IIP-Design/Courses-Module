const React = require('react');

const MediaObject = React.createClass({
  render: function() {
    const CustomTag = `${this.props.tag}`;

    return (
        <div className="media-object">
          <img className="media-object-image" src={ this.props.src_url } alt={ this.props.alt } width={ this.props.width } height={ this.props.height }/>
          <header>
            <CustomTag className="media-object-title">{ this.props.title }</CustomTag>
          </header>
          <p className="media-object-description">{ this.props.description }</p>
        </div>
    );
  }
});

module.exports = MediaObject;
