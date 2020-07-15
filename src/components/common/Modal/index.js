import './styles.scss';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { hideModal } from './actions';

const propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

function Modal({ children, id }) {
  const node = useRef();
  const dispatch = useDispatch();
  const isHide = useSelector((state) => state.modal.currents).find(
    (modalFetched) => modalFetched && modalFetched.id === id,
  ).hide;

  useEffect(() => {
    function handleClickOutsideModal(e) {
      if (!node.current.contains(e.target)) {
        dispatch(hideModal(id));
      }
    }

    function downHandlerModal({ key }) {
      if (key === 'Escape') {
        dispatch(hideModal(id));
      }
    }

    if (isHide) {
      document.removeEventListener('mousedown', handleClickOutsideModal);
      document.removeEventListener('keydown', downHandlerModal);
    } else {
      document.addEventListener('mousedown', handleClickOutsideModal);
      document.addEventListener('keydown', downHandlerModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
      document.removeEventListener('keydown', downHandlerModal);
    };
  }, [isHide, dispatch, id]);

  return (
    <div className={`bg-modal${isHide ? '' : ' show'}`}>
      <div ref={node} className={`modal${isHide ? '' : ' show'}`}>
        <div className="container content">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;
