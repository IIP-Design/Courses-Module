import React from 'react';

const { func, bool, node, object } = React.PropTypes;

require('./stylesheets/Modal.scss');

const Modal = props => {
  const { show,
          children,
          onClose,
          language } = props;

  const { continueLesson } = language;

  // Render nothing if the "show" prop is false
  if (!show) {
    return null;
  }

  return (
    <div className='quizmodal-backdrop'>
      <div className='quizmodal-modal'>
        { children }

        <div>
          <button className='quizmodal-close' onClick={ onClose }>
            { continueLesson }
          </button>
        </div>
      </div>
    </div>
  );
};


Modal.propTypes = {
  onClose: func,
  show: bool,
  children: node,
  language: object
};


export default Modal;