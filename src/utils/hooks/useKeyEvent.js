import { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  condition: PropTypes.bool.isRequired,
  innerHandleKeyPressFn: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

const keyEvents = {
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
  KEY_PRESS: 'keypress',
};

const keys = {
  ESC: 'Escape',
};

// TODO: Necessario passar qual elemento sera atribuido o Listener

function useKeyEvent(condition, innerHandleKeyPressFn, event, SelectedKey) {
  useEffect(() => {
    async function handleKeyPress({ key }) {
      if (key === SelectedKey) {
        await innerHandleKeyPressFn();
      }
    }

    if (condition) {
      document.addEventListener(event, handleKeyPress);
    } else {
      document.removeEventListener(event, handleKeyPress);
    }

    return () => {
      document.removeEventListener(event, handleKeyPress);
    };
  }, [condition, innerHandleKeyPressFn, event, SelectedKey]);
}

useKeyEvent.propTypes = propTypes;

export { useKeyEvent, keyEvents, keys };
