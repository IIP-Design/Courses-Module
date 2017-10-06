import React from 'react';
import { connect } from 'react-redux';

const { func, bool, node, object } = React.PropTypes;

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 200,
      margin: '0 auto',
      padding: '80px 20px 0',
      textAlign: 'center',
      fontSize: '2em'
    };

    const closeStyle = {
      backgroundColor: 'skyblue',
      borderRadius: 6,
      padding: 12,
      marginTop: 20,
      fontSize: '0.5em',
      border: 'none',
      color: 'white',
      cursor: 'pointer'
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div>
            <button onClick={this.props.onClose} style={closeStyle}>
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