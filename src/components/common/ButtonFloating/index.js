import './styles.scss';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useWidthPage, useMouseEvent, mouseEvents } from '../../../utils/hooks';

const propTypes = {
  mainStyle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  contractedText: PropTypes.string.isRequired,
  expandedText: PropTypes.string.isRequired,
};

function ButtonFloating({ mainStyle, url, contractedText, expandedText }) {
  const router = useRouter();
  const widthPage = useWidthPage();
  const node = useRef();

  const [closeButtonIsShown, setCloseButtonIsShown] = useState(false);
  const [mainContentIsShown, setMainContentIsShown] = useState(true);
  const [mainContentIsExpanded, setMainContentIsExpanded] = useState(false);

  function handleMouseDownOutside() {
    setMainContentIsExpanded(false);
    setCloseButtonIsShown(false);
  }

  useMouseEvent(mainContentIsShown, handleMouseDownOutside, node, mouseEvents.MOUSE_DOWN);

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
          <div className="contracted-text">{contractedText}</div>
          <div className={`text-floating${mainContentIsExpanded ? ' show' : ''}`}>
            {expandedText}
          </div>
        </button>
      </div>
    </div>
  );
}

ButtonFloating.propTypes = propTypes;

export default ButtonFloating;
