const React = require('react');
const { Link } = require('react-router');
const Image = require('./Image');

const MediaObject = React.createClass({
  render: function() {
    const CustomTag = `${this.props.tag}`;
    const reversed = (this.props.reversed === undefined) ? false : true;

    // Description vs Excerpt and how to handle custom styles, like for instance the image floated right, instead of left?
    return (
        <div className={ reversed ? 'media-object reversed' : 'media-object' }>
          <Link to={ this.props.link }>
            <Image { ...this.props.media } />
          </Link>
          <header>
            <Link to={ this.props.link }>
              <CustomTag className='media-object-title'>{ this.props.title }</CustomTag>
            </Link>
          </header>
          <p className='media-object-description'>{ this.props.description }</p>
        </div>
    );
  }
});

module.exports = MediaObject;
