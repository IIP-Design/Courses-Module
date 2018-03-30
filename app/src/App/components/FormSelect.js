import React from 'react';

const { string, func } = React.PropTypes;


/*
 * A generic form input component
 *
 * @since 1.0.0
 */

const FormSelect = React.createClass({
	propTypes: {
	  id: string,
		name: string,
		label: string,
		type: string,
		onChange: func
  },


  shouldComponentUpdate(nextProps, nextState) {
  	return false;
  },


  shouldComponentUpdate(nextProps, nextState) {
  	return false;
  },


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
          onChange={ onChange }/>
        { label }
      </label>
    );
	}
});

export default FormSelect;

