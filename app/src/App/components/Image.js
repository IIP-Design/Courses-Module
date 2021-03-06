import React from 'react';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';
import { sortBy } from 'App/helpers';

const { string, number, array } = PropTypes;

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.generateSrcset = this.generateSrcset.bind(this);
    this.generateSizes = this.generateSizes.bind(this);
  }

  // @todo: This will definitely need some major work once we know the srcsets, etc
  // Generate the srcset attribute from the widths and srcs provided
  generateSrcset(props) {
    const srcset = props.srcset.sort(sortBy('width', 'desc'));
    let error = false;
    let newSrcSet = '';

    srcset.forEach((image) => {
      if (image.src === undefined) {
        error = new Error('Required field "src" is undefined');
        return;
      }

      if (image.width === undefined) {
        error = new Error('Required field "width" is undefined');
        return;
      }

      newSrcSet += sprintf('%s %dw, ', image.src, image.width);
    });

    if (error !== false) {
      return error;
    }

    return newSrcSet;
  }

  // Generate the sizes attribute from the widths and media queries
  generateSizes(props) {
    const srcset = props.srcset.sort(sortBy('width'));
    let error = false;
    let sizes = '';

    srcset.forEach((image, index) => {
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
  }


  render() {
    const props = this.props;
    const { src, alt, width, height } = this.props;

    // If we don't receive a responsive image array, return early with a default image tag early
    // if (props.srcset.length === 0) {  // srcset is returning as {}} and not an [] so it is failing as {} does not have a length property
    //   return (
    //     <img src={ this.props.src } alt={ this.props.alt } width={ this.props.width } height={ this.props.height } />
    //   );
    // }

    const srcset = this.generateSrcset(props);
    const sizes = this.generateSizes(props);

    // If something went wrong, return the default <img> tag
    if (srcset instanceof Error || sizes instanceof Error) {
      return (
        <img
          src={ src }
          alt={ alt }
          width={ width }
          height={ height } />
      );
    }

    // Hopefully everything is as it should be
    return (
      <img
        srcSet={ srcset }
        sizes={ sizes }
        src={ src }
        alt={ alt } />
    );
  }
};


Image.defaultProps = {
  media_queries: [ '25em', '48em', '64em', '75em' ]
};


Image.propTypes = {
  src: string, //.isRequired,
  alt: string, //.isRequired,
  width: number, //.isRequired,
  height: number, //.isRequired,
  srcset: array,
  media_queries: array
};


export default Image;
