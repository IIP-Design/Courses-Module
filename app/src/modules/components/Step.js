const React = require('react');

const Step = (props) => {
    return (
   	<li className={ props.className }><span className="course-step-title">{ props.title }</span><span className="course-step-description">{ props.children }</span></li>
    );
};

module.exports = Step;
