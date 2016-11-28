const React = require('react');

require('../../App/components/stylesheets/LessonLayout.scss');

const LessonLayout = (props) => {
   return (
      <div>
        { props.children }
      </div>
    );
};

const { object } = React.PropTypes;

LessonLayout.propTypes = {
  children: object
}

module.exports = LessonLayout;
