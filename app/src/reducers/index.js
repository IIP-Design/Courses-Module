const { combineReducers } = require('redux');

// Reducers
const coursesReducer = require('./coursesReducer');
const quizReducer = require('./quizReducer');

// Combine Reducers
var reducers = combineReducers({
    courses: coursesReducer,
    quiz: quizReducer
});

module.exports = reducers;
