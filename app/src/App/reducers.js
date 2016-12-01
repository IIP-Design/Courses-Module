const initialState = {
  isFetching: true
};

export const appReducer = (state = initialState, action) => {
  if (action.status) {
    return Object.assign({}, state, action.payload);
  }

  return state;
};

