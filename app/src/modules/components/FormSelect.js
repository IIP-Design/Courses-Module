const React = require('react');
const { string, func } = React.PropTypes;

const FormSelect = (props) => {
    return (
       <label htmlFor={ props.id }> 
					<input 
						id={ props.id }
						value={ props.id }   
						name={ props.name } 
						type={ props.type } />
					{ props.label }
				</label>
    );
};

FormSelect.propTypes = {
	id: string,  
	name: string,
	label: string,
	type: string
}

module.exports = FormSelect;
