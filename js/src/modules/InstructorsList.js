const React       = require('react');
const Instructor  = require('./Instructor');

const InstructorsList = React.createClass({
  render: function() {
    return (
      <section>
        <div className="instructors">
          <h4>Instructors</h4>
          <Instructor />
        </div>
      </section>
    );
  }
});

module.exports = InstructorsList;
