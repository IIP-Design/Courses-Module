import React from 'react';

const { func, bool, node, object } = React.PropTypes;

require('./stylesheets/Modal.scss');

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="quizmodal-backdrop">
        <div className="quizmodal-modal">
          {this.props.children}

          <div>
            <button className="quizmodal-close" onClick={this.props.onClose}>
              { this.props.language.continueLesson }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: func,
  show: bool,
  children: node,
  language: object
};

export default Modal;