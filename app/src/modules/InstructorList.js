const React       = require('react');
const { Link }    = require('react-router');
const MediaObject = require('./components/MediaObject');
const shortid = require('shortid');

require('../Course/components/stylesheets//InstructorList.scss');

const InstructorList = React.createClass({
  propTypes: {
    instructors: React.PropTypes.array
  },

  render() {
    const length = this.props.instructors.length;
    const instructors = this.props.instructors.map((instructor) => {
      const link = `/instructors/${ instructor.slug }`

      return (
        <div key={ instructor.id } className={ (length < 3) ? 'media-object half' : 'media-object one-third' }>
          <Link to={ link }>
            <img src={ instructor.image.src } alt={ instructor.image.alt } />
          </Link>
          <header>
            <Link to={ link }>
              <h4 className='media-object-title'>{ instructor.title }</h4>
            </Link>
          </header>
        </div>
      );
    });

    return (
      <section className="instructors-list">
        <header>
          <h3>{ (length > 1) ? 'Instructors' : 'Instructor' }</h3>
        </header>
        { instructors }
      </section>
    );
  }
});

module.exports = InstructorList;
