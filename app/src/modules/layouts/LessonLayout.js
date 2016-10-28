const React = require('react')

const LessonLayout = (props) => {
   return (
      <div>
        <p>LessonLayout</p>
        { props.children }
      </div>
    );
};

const { object } = React.PropTypes;

LessonLayout.propTypes = {
  children: object
}

module.exports = LessonLayout;
