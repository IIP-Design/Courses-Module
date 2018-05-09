import React from 'react';
import PropTypes from 'prop-types';

const { string, func } = PropTypes;


/**
 * A generic form input component
 *
 * @since 1.0.0
 */

class FormSelect extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }


  render() {
    const { id,
            name,
            type,
            onChange,
            label } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          value={ id }
          name={ name }
          type={ type }
          onChange={ onChange } />
        { label }
      </label>
    );
	}
}


FormSelect.propTypes = {
  id: string,
  name: string,
  label: string,
  type: string,
  onChange: func
};


export default FormSelect;
