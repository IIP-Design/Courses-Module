import * as types from './actionTypes';


/*
 * Set current lesson
 */

export function setLesson(lesson) {
 return {
    type: types.SET_LESSON,
    payload: {
      detail: lesson,
      image: lesson.image,
      media: lesson.media,
      glossary: lesson.glossary,
      resources: lesson.resources
    }
  };
}

