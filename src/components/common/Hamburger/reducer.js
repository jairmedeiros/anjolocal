import { ACTIVATED, DESACTIVATED } from './actions/constants';

const initialState = {
  activated: false,
};

function hamburgerReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATED:
      return {
        ...state,
        activated: true,
      };
    case DESACTIVATED:
      return {
        ...state,
        activated: false,
      };
    default:
      return state;
  }
}

export default hamburgerReducer;
