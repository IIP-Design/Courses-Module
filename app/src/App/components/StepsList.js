import React from 'react';
import PropTypes from 'prop-types';

import Step from 'App/components/Step';

import 'App/components/stylesheets/StepsList.scss';

const { object } = PropTypes;


/*
 * The list of Steps combined into one component
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const StepsList = (props) => {
  const { stepTake,
          stepTakeTitle,
          stepQuiz,
          stepQuizTitle,
          stepCert,
          stepCertTitle } = props.language;

  return (
    <ul className='steps-list'>
      <Step className='step' title={ stepTakeTitle }>
        { stepTake }
      </Step>
      <Step className='step' title={ stepQuizTitle }>
        { stepQuiz }
      </Step>
      <Step className='step' title={ stepCertTitle }>
        { stepCert }
      </Step>
    </ul>
  );
};


StepsList.propTypes = {
  language: object
};


export default StepsList;
