import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const { string, array } = PropTypes;


/*
 * Generates a select menu from an array options passed via props.
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const FormDropDown = (props) => {
  const { options,
          id,
          label,
          name,
          type } = props;

  const renderDropDown = () => {
    return options.map((option) => {
      return <option key={ shortid.generate() }>{ option }</option>;
    });
  };

  return (
    <div className='form-drop-down'>
      <label className='form-label' htmlFor={ id }>{ label }</label>
      <select
        id={ id }
        name={ name }
        type={ type }>
        { renderDropDown() }
      </select>
    </div>
  );
};


FormDropDown.propTypes = {
	id: string,
	name: string,
	label: string,
	options: array
};


export default FormDropDown;
