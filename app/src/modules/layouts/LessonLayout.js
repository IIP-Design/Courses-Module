import React from 'react';

const { object } = React.PropTypes;

require('../../App/components/stylesheets/LessonLayout.scss');

const LessonLayout = (props) => {
  return (
    <div>
      { props.children }
    </div>
  );
};

LessonLayout.propTypes = {
  children: object
}

module.exports = LessonLayout;
