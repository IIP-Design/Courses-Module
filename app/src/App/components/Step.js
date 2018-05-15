import React from 'react';
import PropTypes from 'prop-types';

import styles from 'App/components/stylesheets/StepsList.scss';

const { string } = PropTypes;


/**
 * A step that leads to getting a certificate.
 *
 * @example "Take All Lessons" from a course main page
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const Step = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <li className={ className }>
      <span className={ `${ styles.title } course-step-title` }>{ title }</span>
      <span className={ `${ styles.desc } course-step-description` }>{ children }</span>
    </li>
  );
};


Step.propTypes = {
  className: string,
  title: string,
  children: string
};


export default Step;
