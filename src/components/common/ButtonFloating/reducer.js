import { HIDE, SHOW } from './actions/constants';

const initialState = {
  hide: false,
};

function buttonFloatingReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE:
      return {
        ...state,
        hide: true,
      };
    case SHOW:
      return {
        ...state,
        hide: false,
      };
    default:
      return state;
  }
}

export default buttonFloatingReducer;
