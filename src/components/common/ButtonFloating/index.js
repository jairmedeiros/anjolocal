import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { hideButtonFloating } from './actions';
import './styles.scss';
import Button from '../Button';

const propTypes = {
  majorStyle: PropTypes.string,
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  majorStyle: null,
  children: null,
};

function ButtonFloating({ majorStyle, url, children }) {
  const isHide = useSelector((state) => state.buttonFloating.hide);
  const [hideCloseButton, setHideCloseButton] = useState(true);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    if (!isHide) {
      dispatch(hideButtonFloating());
    }
  }

  function HandleHover(e) {
    e.preventDefault();

    if (hideCloseButton) {
      setHideCloseButton(false);
    }
  }

  return (
    <div onMouseEnter={HandleHover} className={`floating ${isHide ? ' hide-content' : ''}`}>
      <div className="floating-inner">
        <button
          type="button"
          onClick={handleClick}
          className={`close-button ${hideCloseButton ? 'hide-content' : ''}`}
        >
          <img src="/static/images/close.svg" alt="Fechar" />
        </button>
        <Button majorStyle={majorStyle} url={url} customClass="button-floating">
          {children}
        </Button>
      </div>
    </div>
  );
}

ButtonFloating.propTypes = propTypes;

ButtonFloating.defaultProps = defaultProps;

export default ButtonFloating;
