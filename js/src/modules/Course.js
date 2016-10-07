const React           = require('react');
const StepsList       = require('./StepsList');
const LessonList      = require('./LessonList');
const InstructorsList = require('./InstructorsList');

const Course = React.createClass({
  render: function() {
    return (
      <div>
        <section>
          <div className="media-object">
            <img src={ this.props.data.media.src_url } alt={ this.props.data.media.alt } height={ this.props.data.media.height } width={ this.props.data.media.width } className="media-object-image__right" />
            <header>
              <h2 className="media-object-title">{ this.props.data.title }</h2>
            </header>
            <p className="media-object-description">{ this.props.data.excerpt }</p>
          </div>
        </section>
        <StepsList />
        <LessonList />
        <InstructorsList />
      </div>
    );
  }
});

module.exports = Course;

