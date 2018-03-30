import React from 'react';

const { string } = React.PropTypes;


/*
 * A generic form input component.
 *
 * @param {Object} props - A React props object
 *
 * @since 1.0.0
 */

const FormInput = (props) => {
  const { id,
          label,
          name,
          type } = props;

  return (
    <div className='form-group'>
      <label className='form-label' htmlFor={ id }>{ label }</label>
      <input
        id={ id }
        name={ name }
        type={ type } />
    </div>
  );
};


FormInput.propTypes = {
	id: string,
	name: string,
	label: string,
	type: string
}


export default FormInput;

