import React from 'react';
import Step from './Step';

require('../../App/components/stylesheets/StepsList.scss');

const StepsList = (props) => (
  <section>
    <ul className="steps-list">
      <Step className="steps-list__first step" title="Take All Lessons">Watch, listen or read all lessons</Step>
      <Step className="steps-list__second step" title="Pass the Quiz">Answer quiz questions correctly</Step>
      <Step className="steps-list__third step" title="Get Your Certificate">We will email your personalized certificate</Step>
    </ul>
  </section>
);

module.exports = StepsList;

