import React from 'react';
import PropTypes from 'prop-types';

const { func, bool, node, object } = PropTypes;

import 'Quiz/components/stylesheets/Modal.scss';


const Modal = (props) => {
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
