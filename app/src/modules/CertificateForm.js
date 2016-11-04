const React = require('react');
const FormInput = require('./components/FormInput'); 
const FormSelect = require('./components/FormSelect'); 

const CertificateForm = React.createClass({
	render() {
		return (
			<div>
				<h3>Congratulations, You Passed!</h3>
				<div>Complete the form below to get your certificate.</div>
				<form action=''>
					<FormInput 
		    	  id='course' 
		    	  type='text'
		    		name='course'   
		    		label='Course'
		    	/>
		    	<FormInput 
		    	  id='first-name' 
		    	  type='text'
		    		name='first-name'   
		    		label='First (Given Name):'
		    	/>
		    	<FormInput 
		    	  id='last-name' 
		    	  type='text'
		    		name='last-name'   
		    		label='Last (Family Name):'
		    	/>
		    	<FormInput 
		    	  id='full-name' 
		    	  type='text'
		    		name='full-name'   
		    		label='Full name as it should appear on your certificate:'
		    	/>
		    	<FormInput 
		    	  id='email' 
		    	  type='email'
		    		name='email'   
		    		label='Email Address:'
		    	/>
					<FormSelect 
		    	  id='signup'
		    	  type='checkbox'
		    		name='signup'   
		    		label='Receive "Campaign Name" Updates'
		    	/>
		    	<div><button type='submit'>Submit</button></div>
				</form>
			</div>
		);
	}
});

module.exports = CertificateForm;
