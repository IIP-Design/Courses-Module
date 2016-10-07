const React = require('react');
const Step  = require('./Step');

const StepsList = React.createClass({
  render: function() {
    return (
      <section>
        <ul className="course-steps">
          <Step className="course-step__first" title="Take All Lessons">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Step>
          <Step className="course-step__second" title="Pass the Quiz">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Step>
          <Step className="course-step__third" title="Get Your Certificate">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Step>
        </ul>
      </section>
    );
  }
});

module.exports = StepsList;
