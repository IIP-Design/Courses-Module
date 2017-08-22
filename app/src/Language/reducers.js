import langs from './langs';
import * as types from './actionTypes';

const initialState = {
  language: langs.en
};

export const langReducer = (state = initialState, action) => {
  let langConfig = langs[action.payload];
  if (action.type === types.SET_LANGUAGE ) {
    return (langConfig) ? langConfig : langs['en'];
  }

  return state;
};