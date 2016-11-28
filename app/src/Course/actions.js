import * as types from './actionTypes';


/*
 * Utility method to get data from id
 */

function getData(data) {
  const keys = Object.keys(data);
  const result = keys.map((key) => {
    return data[key];
  })

  return result;
}


/*
 * populate redux store upon successful fetch
 */

export function fetchCourseComplete(data) {
  const course = data.entities.course[data.result];  // get course by id

  return {
    type: types.FETCH_COURSE_COMPLETE,
    payload: {
      isFetching: false,
      detail: course,
      lessons: getData(data.entities.lessons),
      instructors: getData(data.entities.instructors)
    }
  };
}

