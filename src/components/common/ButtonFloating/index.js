import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { hideButtonFloating } from './actions';

import './styles.scss';

const propTypes = {
  majorStyle: PropTypes.string,
  url: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  textFloating: PropTypes.string.isRequired,
};

const defaultProps = {
  majorStyle: null,
  emoji: null,
};

function ButtonFloating({ majorStyle, url, emoji, textFloating }) {
  const router = useRouter();
  const isHide = useSelector((state) => state.buttonFloating.hide);
  const node = useRef();
  const [hideCloseButton, setHideCloseButton] = useState(true);
  const [showButtonFloating, setShowButtonFloating] = useState(false);
  const [width, setWidth] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  function handleClickOutsideButtonFloating(e) {
    if (!node.current.contains(e.target)) {
      setShowButtonFloating(false);
      setHideCloseButton(true);
    }
  }

  useEffect(() => {
    if (showButtonFloating) {
      document.addEventListener('mousedown', handleClickOutsideButtonFloating);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideButtonFloating);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideButtonFloating);
    };
  }, [showButtonFloating]);

  function handleCloseClick(e) {
    e.preventDefault();

    if (!isHide) {
      dispatch(hideButtonFloating());
    }
  }

  function handleClick(e) {
    e.preventDefault();

    if (width) {
      if (width > 789 || showButtonFloating) {
        router.push(url);
        setShowButtonFloating(false);
        setHideCloseButton(true);
      } else {
        setShowButtonFloating(true);
      }
    }
  }

  function handleHover(e) {
    e.preventDefault();

    if (hideCloseButton) {
      setHideCloseButton(false);
    } else {
      setHideCloseButton(true);
    }
  }

  return (
    <div
      ref={node}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`floating${isHide ? ' hide-content' : ''}`}
    >
      <div className="floating-inner">
        <button
          type="button"
          onClick={handleCloseClick}
          className={`close-button${hideCloseButton && !showButtonFloating ? ' hide-content' : ''}`}
        >
          <img src="/static/images/close.svg" alt="Fechar" />
        </button>
        <button
          type="button"
          onClick={handleClick}
          className={`button button-block button-${majorStyle} button-floating${
            showButtonFloating ? ' show' : ''
          }`}
        >
          <div className="emoji">{emoji}</div>
          <div className={`text-floating${showButtonFloating ? ' show' : ''}`}>{textFloating}</div>
        </button>
      </div>
    </div>
  );
}

ButtonFloating.propTypes = propTypes;

ButtonFloating.defaultProps = defaultProps;

export default ButtonFloating;
