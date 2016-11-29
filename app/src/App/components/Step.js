import React from 'react';

const { string } = React.PropTypes;

const Step = (props) => (
  <li className={ props.className }><span className="course-step-title">{ props.title }</span><span className="course-step-description">{ props.children }</span></li>
);

Step.propTypes = {
    className: string,
    title: string,
    children: string
}

module.exports = Step;
