import { should } from 'chai';

import { default as data } from '../../../test/data';
import { requestData } from 'App/actions';
import { appReducer } from 'App/reducers';

should();

/**
 * Initial variables
 */

let state;
let newState;
let action;
const initialState = {
  isFetching: true
};


/**
 * Action & Reducer tests
 */

describe('App Action:', () => {
  describe('REQUEST_DATA', () => {
    it('will successfully retrieve a course.', () => {
      // call the action and reducer
      action = requestData(data);
      newState = appReducer(state = initialState, action);

      const prevState = state;

      // assertions
      newState.isFetching.should.equal(false);
      prevState.isFetching.should.equal(true);
      newState.data.courses.should.be.an('object');
      newState.data.courses.id.should.equal(972);
      newState.data.courses.slug.should.equal('fundamentals-of-business-expansion-yali');
      newState.data.courses.title.should.equal('Fundamentals of Business Expansion');

      newState.data.courses.lessons.should.be.an('array');
      newState.data.courses.lessons.forEach((lesson) => {
        lesson.description.should.be.a('string');
        lesson.excerpt.should.be.a('string');
        lesson.media.should.be.an('object');
        Object.keys(lesson.media).length.should.equal(6);
        lesson.media.id.should.be.a('string');
        lesson.media.title.should.equal('Video');
        lesson.media.transcript_text.should.be.a('string');
        lesson.media.transcript_file_url.should.be.a('string');

        lesson.glossary.should.be.an('array');
        lesson.glossary.forEach((term) => {
          term.id.should.be.a('number');
          term.slug.should.be.a('string');
          term.title.should.be.a('string');
          term.description.should.be.a('string');
        });

        lesson.resources.should.be.an('array');
        lesson.resources.forEach((resource) => {
          resource.id.should.be.a('string');
          resource.title.should.be.a('string');
          resource.description.should.be.a('string');
          resource.type.should.be.a('string');
        });

        lesson.instructors.should.be.an('array');
        lesson.instructors.forEach((instructor) => {
          instructor.id.should.be.a('number');
          instructor.slug.should.be.a('string');
          instructor.title.should.be.a('string');
          instructor.image.should.be.an('object');
          instructor.image.id.should.be.a('number');
          instructor.image.src.should.be.a('string');
          instructor.salutation.should.be.a('string');
          instructor.description.should.be.a('string');
        });

        lesson.quiz.should.be.an('array');
        lesson.quiz.forEach((question) => {
          question.id.should.be.a('string');
          question.questionType.should.be.a('string');
          question.questionType.should.equal('mc');
          question.text.should.be.a('string');
          question.choices.should.be.an('array');
          question.choices[0].correct.should.be.a('boolean');
        });
      });
    });


    it('will set an isFetching state if no data or error.', () => {
      // call the action and reducer
      action = requestData(undefined);
      newState = appReducer(state = initialState, action);

      // assertions
      newState.isFetching.should.equal(true);
    });


    it('will return an error if error is received.', () => {
      const error = '404 NOT FOUND';

      // call the action and reducer
      action = requestData(error);
      newState = appReducer(state = initialState, action);

      const prevState = state;

      // assertions
      newState.isFetching.should.equal(false);
      newState.data.should.be.a('string');
      newState.data.should.equal('404 NOT FOUND');
      prevState.isFetching.should.equal(true);
    });
  });
});
