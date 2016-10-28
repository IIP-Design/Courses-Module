const { combineReducers } = require('redux');

// Reducers
const courseReducer = require('./courseReducer');
const lessonReducer = require('./lessonReducer');

// Combine Reducers
var reducers = combineReducers({
    course: courseReducer,
    lesson: lessonReducer
});

module.exports = reducers;
