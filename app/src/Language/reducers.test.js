import { should } from 'chai';

import langs from 'Language/langs';
import { setLanguage } from 'Language/actions';
import { langReducer } from 'Language/reducers';

should();

/**
 * Initial variables
 */

let state;
let newState;
let action;
const initialState = {
  language: langs.en
};


/**
 * Action & Reducer tests
 */

describe('Language Action:', () => {
  describe('SET_LANGUAGE ', () => {
    it('will set a default language.', () => {
      // call the action and reducer
      action = setLanguage();
      newState = langReducer(state = initialState, action);

      // assertions
      newState.should.be.an('object');
      Object.keys(newState).length.should.equal(39);
      newState.locale.should.equal('en');
      newState.language.should.equal('english');
    });


    it('will set a selected language.', () => {
      // call the action and reducer
      action = setLanguage('es');
      newState = langReducer(state = initialState, action);

      const prevState = state.language;

      // assertions
      newState.should.be.an('object');
      Object.keys(newState).length.should.equal(39);
      newState.locale.should.equal('es');
      newState.language.should.equal('spanish');
      prevState.locale.should.equal('en');
      prevState.language.should.equal('english');
    });
  });
});
