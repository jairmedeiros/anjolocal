import { HIDE, SHOW } from './constants';

function showModal(id) {
  return {
    type: SHOW,
    payload: {
      id,
    },
  };
}

function hideModal(id) {
  return {
    type: HIDE,
    payload: {
      id,
    },
  };
}

export { showModal, hideModal };
