import React from 'react';
import PropTypes from 'prop-types';

const { func, bool, node, object } = PropTypes;

import styles from 'Quiz/components/stylesheets/Modal.scss';


/**
 * Modal component
 *
 * @param {Object} props - React props object
 *
 * @since tba
 */

const Modal = (props) => {
  const {
    show,
    children,
    onClose,
    language
  } = props;

  const { continueLesson } = language;

  // Render nothing if the "show" prop is false
  if (!show) {
    return null;
  }

  return (
    <div className={ `${ styles.backdrop } quizmodal-backdrop` }>
      <div className={ `${ styles.modal } quizmodal-modal` }>
        { children }

        <button className={ `${ styles.close } quizmodal-close` } onClick={ onClose }>
          { continueLesson }
        </button>
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
