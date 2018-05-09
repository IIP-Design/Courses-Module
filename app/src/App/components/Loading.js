import React from 'react';

/**
 * Loading component for react-loadable
 *
 * @param {Object} props - React props object
 *
 * @since tba
 */

const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};


export default Loading;
