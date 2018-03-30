import React from 'react';
import { Link } from 'react-router';

require('./stylesheets/MediaObject.scss');

const { string, bool, object } = React.PropTypes;


/*
 * A simple media object component
 *
 * @see http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/
 *
 * @since 1.0.0
 */

const MediaObject = React.createClass({
  propTypes: {
    tag: string.isRequired,
    reversed: bool,
    link: string,
    image: object,
    title: string,
    description: string
  },


  setDescription() {
    return { __html: this.props.description };
  },


  render() {
    const { tag,
            link,
            image,
            title } = this.props;

    const CustomTag = `${ tag }`;
    const reversed = !(this.props.reversed === undefined);

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
          dangerouslySetInnerHTML={ this.setDescription() }></div>
       </div>
    );
  }
});


export default MediaObject;

