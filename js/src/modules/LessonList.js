const React = require('react');
const Lesson = require('./Lesson');

const LessonList = React.createClass({
  render: function() {
    return (
      <section>
        <ol>
          <Lesson />
        </ol>
      </section>
    );
  }
});

module.exports = LessonList;
