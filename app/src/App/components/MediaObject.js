import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import styles from 'App/components/stylesheets/MediaObject.scss';

const { string, bool, object } = PropTypes;


/**
 * Render raw description
 *
 * @param {Object} props - React props object
 *
 * @since 1.0.0
 */

const setDescription = (props) => {
  return { __html: props.description };
}


/**
 * A simple media object component
 *
 * @see http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/
 *
 * @since 1.0.0
 */

const MediaObject = (props) => {
  const { tag,
          link,
          image,
          title } = props;

  const CustomTag = `${ tag }`;
  const reversed = !(props.reversed === undefined);

  return (
    <div className={ `${ styles.object } media-object ${reversed ? styles.reversed : ''}` }>
      <Link to={ link }>
        <img
          src={ image.src }
          alt={ image.alt }
          className={ styles.thumbnail } />
      </Link>
      <header className={ styles.header }>
        <Link to={ link } className={ styles.link }>
          <CustomTag className={ `${ styles.title } media-object-title` }>
            { title }
          </CustomTag>
        </Link>
      </header>
      <div
        className={ `${ styles.desc } media-object-description` }
        dangerouslySetInnerHTML={ setDescription(props) } />
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
