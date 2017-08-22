import React from 'react';
import Step from './Step';

require('./stylesheets/StepsList.scss');


/*
 * The list of Steps combined into one component
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const StepsList = (props) => (
  <section>
    <ul className="steps-list">
      <Step className="step" title={ props.language.stepTakeTitle }>{ props.language.stepTake }</Step>
      <Step className="step" title={ props.language.stepQuizTitle }>{ props.language.stepQuiz }</Step>
      <Step className="step" title={ props.language.stepCertTitle }>{ props.language.stepCert }</Step>
    </ul>
  </section>
);


export default StepsList;
