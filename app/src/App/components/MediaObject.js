import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

require('App/components/stylesheets/MediaObject.scss');

const { string, bool, object } = PropTypes;


/*
 * A simple media object component
 *
 * @see http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/
 *
 * @since 1.0.0
 */

const MediaObject = props => {
  const setDescription = props => {
    return { __html: props.description };
  }

  const { tag,
          link,
          image,
          title } = props;

  const CustomTag = `${ tag }`;
  const reversed = !(props.reversed === undefined);

  return (
    <div className={ reversed ? 'media-object reversed' : 'media-object' }>
    <Link to={ link }>
      <img src={ image.src } alt={ image.alt } />
    </Link>
    <header>
        <Link to={ link }>
        <CustomTag className='media-object-title'>{ title }</CustomTag>
        </Link>
      </header>
      <div
      className='media-object-description'
      dangerouslySetInnerHTML={ setDescription(props) }></div>
    </div>
  );
};


MediaObject.propTypes = {
  tag: string.isRequired,
  reversed: bool,
  link: string,
  image: object,
  title: string,
  description: string
};


export default MediaObject;

