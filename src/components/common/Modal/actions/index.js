import { HIDE, SHOW, SEND_DATA } from './constants';

// TODO: Adicionar um action de START

function showModal(id) {
  return {
    type: SHOW,
    payload: {
      id,
      hide: false,
    },
  };
}

function hideModal(id) {
  return {
    type: HIDE,
    payload: {
      id,
      hide: true,
    },
  };
}

function sendDataModal(id, data) {
  return {
    type: SEND_DATA,
    payload: {
      id,
      data,
    },
  };
}

export { showModal, hideModal, sendDataModal };
