import './styles.scss';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useMouseEvent, mouseEvents, keys, useKeyEvent, keyEvents } from '../../../utils/hooks';

const propTypes = {
  children: PropTypes.node.isRequired,
  shown: PropTypes.bool.isRequired,
  setShown: PropTypes.func.isRequired,
};

function Modal({ children, shown, setShown }) {
  const node = useRef();

  function eventHandle() {
    setShown(false);
  }

  useMouseEvent(shown, eventHandle, node, mouseEvents.MOUSE_DOWN);
  useKeyEvent(shown, eventHandle, keyEvents.KEY_DOWN, keys.ESC);

  return (
    <div className={`bg-modal${shown ? ' show' : ''}`}>
      <div ref={node} className={`modal${shown ? ' show' : ''}`}>
        <div className="container content">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;
