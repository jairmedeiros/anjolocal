import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useWidthPage from '../../../utils/hooks/useWidthPage';

import './styles.scss';
import { MOUSE_DOWN } from '../../../utils/hooks/useMouseEvent/constants';
import useMouseEvent from '../../../utils/hooks/useMouseEvent';

const propTypes = {
  mainStyle: PropTypes.string,
  url: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  mainStyle: null,
  emoji: null,
};

function ButtonFloating({ mainStyle, url, emoji, text }) {
  const router = useRouter();
  const widthPage = useWidthPage();
  const node = useRef();

  const [closeButtonIsShown, setCloseButtonIsShown] = useState(false);
  const [mainContentIsShown, setMainContentIsShown] = useState(true);
  const [mainContentIsExpanded, setMainContentIsExpanded] = useState(false);

  useMouseEvent(
    mainContentIsShown,
    () => {
      setMainContentIsExpanded(false);
      setCloseButtonIsShown(false);
    },
    node,
    MOUSE_DOWN,
  );

  function handleCloseClick() {
    setCloseButtonIsShown(false);
    setMainContentIsShown(false);
  }

  function handleClick() {
    if (widthPage.isDesktop || mainContentIsExpanded) {
      router.push(url);
    } else {
      setMainContentIsExpanded(true);
      setCloseButtonIsShown(true);
    }
  }

  function handleHover() {
    setCloseButtonIsShown(!closeButtonIsShown);
  }

  return (
    <div
      ref={node}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`floating${mainContentIsShown ? '' : ' hide-content'}`}
    >
      <div className="floating-inner">
        <button
          type="button"
          onClick={handleCloseClick}
          className={`close-button${
            closeButtonIsShown && mainContentIsShown ? '' : ' hide-content'
          }`}
        >
          <img src="/static/images/close.svg" alt="Fechar" />
        </button>
        <button
          type="button"
          onClick={handleClick}
          className={`button button-block button-${mainStyle} button-floating${
            mainContentIsExpanded ? ' show' : ''
          }`}
        >
          <div className="emoji">{emoji}</div>
          <div className={`text-floating${mainContentIsExpanded ? ' show' : ''}`}>{text}</div>
        </button>
      </div>
    </div>
  );
}

ButtonFloating.propTypes = propTypes;

ButtonFloating.defaultProps = defaultProps;

export default ButtonFloating;
