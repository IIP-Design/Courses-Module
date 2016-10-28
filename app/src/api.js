const axios = require('axios'); 
const store = require('./store');
const { fetchRequest, fetchCourseComplete, fetchError, setLesson } = require('./actions/actions');
const { Schema, arrayOf, normalize } = require('normalizr');
const find  = require('lodash');

// normalization schemas 
const courseSchema 			 			= new Schema('course');
const lessonSchema     	 			= new Schema('lessons');
const quizSchema   			 			= new Schema('quiz');
const instructorSchema 	 			= new Schema('instructors');

lessonSchema.define({
  instructors: arrayOf(instructorSchema),
  quiz: arrayOf(quizSchema)
});

courseSchema.define({
  lessons: arrayOf(lessonSchema)
});

/**
 * Get lesson from redux store by using its slug to find in lessons array
 * Dispatch event to update redux store
 */
export function getLesson(slug) {
	 const lessons = store.getState().course.lessons;
	 const lesson =  _.find(lessons, function(lesson) { return lesson.slug === slug; });
   store.dispatch(setLesson(lesson));
}

/**
 * Fetches course data by id and dispatches an event to update redux store
 * @todo  Cache results
 * Create a shared api call (remove getCourses method) and pass it an endpoint
 */
export function getCourse(id) {
	const dispatch = store.dispatch;

	dispatch( fetchRequest() );

	let endpoint = `app/src/data/course-data-${id}.json`;
  
  // axios automatically formats to json
  return axios.get(endpoint) 
	  .then(response => {
	  	const normalized = normalize(response.data, courseSchema);
	    dispatch( fetchCourseComplete(normalized));
	  })
	  .catch((err) => {
	  	 dispatch(fetchError(err));  // may need to change this as  errors are swallowed
	  });
}

/**
 * Fetches all course data using an array of courses ids
 * and dispatches an event to update redux store (will need to be updated if we  display course list page)
 */
export function getCourses(courseIds) {
	const dispatch = store.dispatch;

	dispatch( fetchRequest() );

	let endpoint = `app/src/data/courses.json?id=${ courseIds }`;
  
  return axios.get(endpoint) 
	  .then(response => {
	  	const normalized = normalize(response.data, arrayOf(courseSchema));
	   	dispatch( fetchCoursesComplete(normalized));
	  })
	  .catch((err) => {
	  	 dispatch(fetchError(err));
	  });
}