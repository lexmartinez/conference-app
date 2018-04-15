import * as types from './types';

const init = {
  loading: false,
  conference: {},
  error: false,
  completed: false,
  detail: undefined
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case types.INFO:
      return {
        ...state,
        loading: true,
        error: false,
        conference: {},
        completed: false,
        detail: undefined
      };
    case types.INFO_OK:
      return {
        ...state,
        loading: false,
        error: false,
        conference: action.payload,
        completed: true,
        detail: undefined
      };
    case types.INFO_FAIL:
      return {
        ...state,
        loading: false,
        conference: {},
        error: true,
        completed: true,
        detail: action.error
      };
    default:
      return state;
  }
};

export default reducer;