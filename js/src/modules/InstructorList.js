const React       = require('react');
const MediaObject = require('./MediaObject');

const InstructorList = React.createClass({
  render: function() {
    const instructors = this.props.instructors.map(function(instructor) {
      return (
        <MediaObject key={ instructor.id } tag={ 'h4' } src_url={ instructor.media.src_url } alt={ instructor.media.alt } width={ instructor.media.width } height={ instructor.media.height } title={ instructor.title } description={ instructor.description } />
      );
    });
    return (
      <section className="instructors-list">
        <header>
          <h3>Instructors</h3>
        </header>
        { instructors }
      </section>
    );
  }
});

module.exports = InstructorList;
