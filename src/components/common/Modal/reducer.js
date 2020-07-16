import { HIDE, SHOW, SEND_DATA } from './actions/constants';

const initialState = {
  currents: [],
};

function createOrChangeState(payLoad, currentsArray) {
  const modal = {
    id: payLoad.id,
    hide: Object.prototype.hasOwnProperty.call(payLoad, 'hide') ? payLoad.hide : false,
  };

  const currentsModal = currentsArray.find(
    (modalFetched) => modalFetched && modalFetched.id === modal.id,
  );

  if (currentsModal) {
    currentsModal.hide = modal.hide;
    if (Object.prototype.hasOwnProperty.call(payLoad, 'data')) {
      currentsModal.data = payLoad.data;
    }
  } else {
    currentsArray.push(modal);
  }

  return currentsArray;
}

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE:
      return {
        ...state,
        currents: createOrChangeState(action.payload, state.currents.slice()),
      };
    case SHOW:
      return {
        ...state,
        currents: createOrChangeState(action.payload, state.currents.slice()),
      };
    case SEND_DATA:
      return {
        ...state,
        currents: createOrChangeState(action.payload, state.currents.slice()),
      };
    default:
      return state;
  }
}

export default modalReducer;
