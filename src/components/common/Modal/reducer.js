import { HIDE, SHOW } from './actions/constants';

const initialState = {
  currents: [],
};

function createOrChangeState(isHide, payLoad, currentsArray) {
  const modal = {
    id: payLoad,
    hide: isHide,
  };

  const currentsModal = currentsArray.find(
    (modalFetched) => modalFetched && modalFetched.id === modal.id,
  );

  if (currentsModal) {
    currentsModal.hide = modal.hide;
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
        currents: createOrChangeState(true, action.payload.id, state.currents.slice()),
      };
    case SHOW:
      return {
        ...state,
        currents: createOrChangeState(false, action.payload.id, state.currents.slice()),
      };
    default:
      return state;
  }
}

export default modalReducer;
