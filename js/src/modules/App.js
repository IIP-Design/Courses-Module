const React = require('react');
const ReactDOM = require('react-dom');
const CourseList 	= require('./CourseList');
const Course = require('./Course');
const CourseLesson = require('./CourseLesson');
const CourseQuiz = require('./CourseQuiz');
const { Router, Route, hashHistory } = require('react-router');

require('./App.scss');

const App = React.createClass({
	render () {
		const data = this.props.data;

		return (
			<Router history={hashHistory}>
					<Route path='/' component={CourseList} data={data} />
					<Route path='/courses' component={CourseList} data={data} />
					<Route path='/courses/:id' component={Course}  />
					<Route path='/courses/:id/course-lesson' component={CourseLesson} />
					<Route path='/courses/:id/course-quiz' component={CourseQuiz} />
			</Router>
		);
	}
});

module.exports = App;
