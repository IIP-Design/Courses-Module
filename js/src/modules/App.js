const React = require('react');
const CourseList 	= require('./CourseList');
const Course = require('./Course');
const CourseLesson = require('./CourseLesson');
const CourseQuiz = require('./CourseQuiz');
const { Router, Route, hashHistory } = require('react-router');

require('./App.scss');

const App = React.createClass({
	propTypes: {
		data: React.PropTypes.array
	},

	getCourse (nextState, replace) {
    const courseArray = this.props.data.filter((course) => Number(course.id) === Number(nextState.params.id))

    if (courseArray.length < 1) {
      return replace('/courses')  // redirect to course list if no match is found
    }

    Object.assign(nextState.params, courseArray[0])
  },

	render () {
		const data = this.props.data;

		return (
			<Router history={hashHistory}>
					<Route path='/' component={CourseList} data={data} />
					<Route path='/courses' component={CourseList} data={data} />
					<Route path='/courses/:id' component={Course} onEnter={this.getCourse}/>
					<Route path='/courses/:id/course-lesson' component={CourseLesson} />
					<Route path='/courses/:id/course-quiz' component={CourseQuiz} />
			</Router>
		);
	}
});

module.exports = App;
