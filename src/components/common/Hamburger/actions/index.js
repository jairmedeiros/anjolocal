import { ACTIVATED, DESACTIVATED } from './constants';

function activeHamburger() {
  return {
    type: ACTIVATED,
  };
}

function desactiveHamburger() {
  return {
    type: DESACTIVATED,
  };
}

export { activeHamburger, desactiveHamburger };
