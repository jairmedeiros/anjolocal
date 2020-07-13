import { HIDE, SHOW } from './constants';

function showButtonFloating() {
  return {
    type: SHOW,
  };
}

function hideButtonFloating() {
  return {
    type: HIDE,
  };
}

export { showButtonFloating, hideButtonFloating };
