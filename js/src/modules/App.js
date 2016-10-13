const React   		= require('react');
const CourseList 	= require('./CourseList');
 										require('./App.scss');

const App = React.createClass({
  render: function() {
    return (
      <CourseList data={ this.props.data } />
    );
  }
});

module.exports = App;
