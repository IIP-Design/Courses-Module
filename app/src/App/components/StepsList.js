import React from 'react';
import PropTypes from 'prop-types';

import Step from 'App/components/Step';

import styles from 'App/components/stylesheets/StepsList.scss';

const { object } = PropTypes;


/**
 * The list of Steps combined into one component
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const StepsList = (props) => {
  const {
    stepTake,
    stepTakeTitle,
    stepQuiz,
    stepQuizTitle,
    stepCert,
    stepCertTitle
  } = props.language;

  return (
    <ul className={ `${ styles.steps } steps-list` }>
      <Step className={ `${ styles.step } step` } title={ stepTakeTitle }>
        { stepTake }
      </Step>
      <Step className={ `${ styles.step } step` } title={ stepQuizTitle }>
        { stepQuiz }
      </Step>
      <Step className={ `${ styles.step } step` } title={ stepCertTitle }>
        { stepCert }
      </Step>
    </ul>
  );
};


StepsList.propTypes = {
  language: object
};


export default StepsList;
