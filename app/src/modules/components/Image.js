const React = require('react');

const Image = React.createClass({
  propTypes: {
    src_url: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    srcset: React.PropTypes.array
  },

  render: function() {
    const sources = this.props.srcset;

    // If we don't receive a responsive image array, return early with a default image tag
    if (sources === undefined) {
      return (
        <img src={ this.props.src_url } alt={ this.props.alt } width={ this.props.width } height={ this.props.height } />
      );
    }

    const responsive = {
      srcset: function() {
        let srcset = '';

        sources.forEach(function(source) {
          // @todo Unhappy about the repetition here
          if (source.file_name === undefined) {
            const err = new ReferenceError('Required field "file_name" is undefined');
            error = err;
            return;
          }

          if (source.image_width === undefined) {
            const err = new ReferenceError('Required field "image_width" is undefined');
            error = err;
            return;
          }

          srcset += (source.file_name + ' ' + source.image_width + ', ');
        });

        return srcset;
      },

      sizes: function() {
        let sizes = '';

        sources.forEach(function(source) {
          // @todo And here...
          if (source.box_width === undefined) {
            const err = new ReferenceError('Required field "box_width" is undefined');
            error = err;
            return;
          }
          sizes += (source.hasOwnProperty('media_query') ? source.media_query + ' ' + source.box_width + ', ' : source.box_width);
        });

        return sizes;
      }
    };

    let error = false;
    const srcset = responsive.srcset();
    const sizes = responsive.sizes();

    // If something went wrong, return the default <img> tag
    if (error !== false) {
      return (
        <img src={ this.props.src_url } alt={ this.props.alt } width={ this.props.width } height={ this.props.height } />
      );
    }

    // Hopefully everything is as it should be
    return (
      <img srcSet={ srcset } sizes={ sizes } src={ this.props.src_url } alt={ this.props.alt } />
    );
  }
});

module.exports = Image;
