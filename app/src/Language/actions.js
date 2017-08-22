import * as types from './actionTypes';

export function setLanguage(language) {
 if( !language ) language = 'en';
  return {
    type: types.SET_LANGUAGE,
    payload: language
  }
}