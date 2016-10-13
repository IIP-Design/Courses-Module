const React = require('react');

const MediaObject = React.createClass({
  render: function() {
    const CustomTag = `${this.props.tag}`;

    return (
        <div className="media-object">
          <img className="media-object-image" src={ this.props.media.src_url } alt={ this.props.media.alt } width={ this.props.media.width } height={ this.props.media.height }/>
          <header>
            <CustomTag className="media-object-title">{ this.props.title }</CustomTag>
          </header>
          <p className="media-object-description">{ this.props.description }</p>
        </div>
    );
  }
});

module.exports = MediaObject;
