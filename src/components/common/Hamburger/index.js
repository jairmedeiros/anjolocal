import './styles.scss';
import PropTypes from 'prop-types';

const propTypes = {
  animation: PropTypes.string.isRequired,
  setActivated: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};

function makeReverse(animation) {
  return `${animation}-r`;
}

const hamburgerAnimations = {
  DX3: {
    normal: '3dx',
    reverse: makeReverse('3dx'),
  },
  DY3: {
    normal: '3dy',
    reverse: makeReverse('3dy'),
  },
  DXDY3: {
    normal: '3dxdy',
    reverse: makeReverse('3dxdy'),
  },
  ARROW: {
    normal: 'arrow',
    reverse: makeReverse('arrow'),
  },
  ARROWALT: {
    normal: 'arrowalt',
    reverse: makeReverse('arrowalt'),
  },
  ARROWTURN: {
    normal: 'arrowturn',
    reverse: makeReverse('arrowturn'),
  },
  BORING: {
    normal: 'boring',
    reverse: makeReverse('boring'),
  },
  COLLAPSE: {
    normal: 'collapse',
    reverse: makeReverse('collapse'),
  },
  ELASTIC: {
    normal: 'elastic',
    reverse: makeReverse('elastic'),
  },
  EMPHATIC: {
    normal: 'emphatic',
    reverse: makeReverse('emphatic'),
  },
  MINUS: {
    normal: 'minus',
    reverse: makeReverse('minus'),
  },
  SLIDER: {
    normal: 'slider',
    reverse: makeReverse('slider'),
  },
  SPIN: {
    normal: 'spin',
    reverse: makeReverse('spin'),
  },
  SPRING: {
    normal: 'spring',
    reverse: makeReverse('spring'),
  },
  STAND: {
    normal: 'stand',
    reverse: makeReverse('stand'),
  },
  SQUEEZE: {
    normal: 'squeeze',
  },
  VORTEX: {
    normal: 'vortex',
    reverse: makeReverse('vortex'),
  },
};

function Hamburger({ animation, setActivated, state }) {
  function handleClick() {
    setActivated(!state);
  }

  return (
    <button
      className={`hamburger hamburger--${animation}${state ? ' is-active' : ''}`}
      type="button"
      onClick={handleClick}
      aria-label="Menu"
      aria-expanded={state}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

Hamburger.propTypes = propTypes;

export { Hamburger, hamburgerAnimations };
