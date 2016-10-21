const axios = require('axios');
const store = require('./store');
const { fetchQuiz, fetchQuizError } = require('./actions/actions');

/**
 * Get quiz questions
 */
export function getQuiz() {
  return axios.get('app/src/course-data.json')
  .then(response => {
    store.dispatch(fetchQuiz(response.data));
    return response;
  })
  .catch((err) => {
  	 store.dispatch(fetchQuizError(err));
  });
}
