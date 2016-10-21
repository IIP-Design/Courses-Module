const React = require('react');
const { sprintf } = require('sprintf-js');


const Image = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    srcset: React.PropTypes.array,
    media_queries: React.PropTypes.array
  },


  // Generage the srcset attribute from the widths and srcs provided
  generateSrcset: function(props) {
    let error = false;
    let srcset = '';

    props.srcset.forEach(function(image) {
      if (image.src === undefined) {
        error = new Error('Required field "src" is undefined');
        return;
      }

      if (image.width === undefined) {
        error = new Error('Required field "width" is undefined');
        return;
      }

      srcset += sprintf('%s %dw, ', image.src, image.width);
    });

    if (error !== false) {
      return error;
    }

    return srcset;
  },


  // Generate the sizes attribute from the widths and media queries
  generateSizes: function(props) {
    let error = false;
    let sizes = '';

    props.srcset.reverse().forEach(function(image, index) {
      if (image.src === undefined) {
        error = new Error('Required field "width" is undefined');
      }

      if (index > 0) {
        sizes = (sprintf('(min-width: %s) %dpx,', props.media_queries[(index-1)], image.width)) + sizes;
      } else {
        sizes = (sprintf(' %dpx', image.width)) + sizes;
      }

    });

    if (error !== false) {
      return error;
    }

    return sizes;
  },


  render: function() {
    const props = this.props;

    // If we don't receive a responsive image array, return early with a default image tag early
    if (props.srcset.length === 0) {
      return (
        <img src={ this.props.src } alt={ this.props.alt } width={ this.props.width } height={ this.props.height } />
      );
    }

    const srcset = this.generateSrcset(props);
    const sizes = this.generateSizes(props);

    // If something went wrong, return the default <img> tag
    if (srcset instanceof Error || sizes instanceof Error) {
      return (
        <img src={ this.props.src } alt={ this.props.alt } width={ this.props.width } height={ this.props.height } />
      );
    }

    // Hopefully everything is as it should be
    return (
      <img srcSet={ srcset } sizes={ sizes } src={ this.props.src } alt={ this.props.alt } />
    );
  }
});

Image.defaultProps = { media_queries: [ '25em', '48em', '64em', '75em' ] }

module.exports = Image;
