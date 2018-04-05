import React from 'react';
import { Step } from 'App/components/dynamic';

require('App/components/stylesheets/StepsList.scss');


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
    <section>
      <ul className="steps-list">
        <Step className="step" title={ stepTakeTitle }>{ stepTake }</Step>
        <Step className="step" title={ stepQuizTitle }>{ stepQuiz }</Step>
        <Step className="step" title={ stepCertTitle }>{ stepCert }</Step>
      </ul>
    </section>
  );
};

export default StepsList;
