import './styles.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { activeHamburger, desactiveHamburger } from './actions';

const propTypes = {
  animation: PropTypes.string.isRequired,
};

function Hamburger({ animation }) {
  const isActive = useSelector((state) => state.hamburger.activated);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    if (isActive) {
      dispatch(desactiveHamburger());
    } else {
      dispatch(activeHamburger());
    }
  }

  return (
    <button
      className={`hamburger hamburger--${animation}${isActive ? ' is-active' : ''}`}
      type="button"
      onClick={handleClick}
      aria-label="Menu"
      aria-expanded={isActive}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

Hamburger.propTypes = propTypes;

export default Hamburger;
