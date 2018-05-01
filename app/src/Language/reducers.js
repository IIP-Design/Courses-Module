import langs from './langs';
import * as types from './actionTypes';

const initialState = {
  language: langs.en
};


export const langReducer = (state = initialState, action) => {
  const langConfig = langs[action.payload];
  if (action.type === types.SET_LANGUAGE) {
    return langConfig || langs.en;
  }
  return state;
};
