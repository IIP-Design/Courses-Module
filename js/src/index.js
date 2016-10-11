const React = require('react');
const ReactDOM = require('react-dom');
const CourseMenu = require('./modules/CourseMenu');
const Course = require('./modules/Course');
const CourseLesson = require('./modules/CourseLesson');
const CourseQuiz = require('./modules/CourseQuiz');
const { Router, Route, hashHistory } = require('react-router');

const App = React.createClass({
	render () {
		return (
			<Router history={hashHistory}>
				<Route path='/courses' component={CourseMenu} />
				<Route path='/courses/:id' component={Course} />
				<Route path='/courses/:id/course-lesson' component={CourseLesson} />
				<Route path='/courses/:id/course-quiz' component={CourseQuiz} />
			</Router>
		);
	}
});

ReactDOM.render(
	<App/>,
	document.getElementById('course-container')
);
