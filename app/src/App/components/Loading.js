import React from 'react';

/**
 * Loading component for react-loadable
 *
 * @param {Object} props - React props object
 *
 * @since tba
 */

const Loading = (props) => {
  const innerWidth = (window.innerWidth > 620) ? '62.5%' : 'initial';
  const style = {
    maxWidth: innerWidth,
    marginTop: '2em',
    marginBottom: '2em'
  };

  if (props.error) {
    return (
      <p style={ style }>
        Sorry, this course didn&rsquo;t load for some reason. If you&rsquo;re accessing this course from a mobile device, try a desktop or laptop computer. Please <a href='/troubleshoot/'>contact us</a> if you continue to have difficulty accessing this course.
      </p>
    );
  } else if (props.timedOut) {
    return <p style={ style }>Taking a long time...</p>;
  } else if (props.pastDelay) {
    return <p style={ style }>Loading...</p>;
  }
  return null;
};


export default Loading;
