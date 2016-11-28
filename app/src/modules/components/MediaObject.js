import React from 'react';
import { Link } from 'react-router';

const { string, bool, object } = React.PropTypes;

require('../../App/components/stylesheets/MediaObject.scss');

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
    const CustomTag = `${ this.props.tag }`;
    const reversed = (this.props.reversed === undefined) ? false : true;

    return (
       <div className={ reversed ? 'media-object reversed' : 'media-object' }>
        <Link to={ this.props.link }>
          <img src={ this.props.image.src } alt={ this.props.image.alt } />
        </Link>
        <header>
           <Link to={ this.props.link }>
            <CustomTag className='media-object-title'>{ this.props.title }</CustomTag>
           </Link>
         </header>
         <div className='media-object-description' dangerouslySetInnerHTML={ this.setDescription() }></div>
       </div>
    );
  }
});

module.exports = MediaObject;
