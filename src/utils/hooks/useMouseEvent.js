import { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  condition: PropTypes.bool.isRequired,
  innerHandleClickOutsideFn: PropTypes.func.isRequired,
  node: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
};

const mouseEvents = {
  MOUSE_DOWN: 'mousedown',
  MOUSE_UP: 'mouseup',
  MOUSE_OVER: 'mouseover',
  MOUSE_OUT: 'mouseout',
  MOUSE_MOVE: 'mousemove',
  CLICK: 'click',
  DBL_CLICK: 'dblclick',
  CONTEXT_MENU: 'contextmenu',
};

// TODO: Necessario passar qual elemento sera atribuido o Listener

function useMouseEvent(condition, innerHandleClickOutsideFn, node, event) {
  useEffect(() => {
    async function handleClickOutside(e) {
      if (!node.current.contains(e.target)) {
        await innerHandleClickOutsideFn();
      }
    }

    if (condition) {
      document.addEventListener(event, handleClickOutside);
    } else {
      document.removeEventListener(event, handleClickOutside);
    }
  }, [condition, node, innerHandleClickOutsideFn, event]);
}

useMouseEvent.propTypes = propTypes;

export { useMouseEvent, mouseEvents };
